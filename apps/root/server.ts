import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse
} from "@angular/ssr/node";
import express from "express";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { json, urlencoded } from "body-parser";
import { convertIPEmail } from "@wlocalhost/ngx-email-builder-convertor";

const {NODE_ENV, PORT} = process.env;
const isProduction = NODE_ENV === 'production';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  server.disable("etag").disable("x-powered-by");
  server.use(json({ limit: "1mb" }));
  server.use(urlencoded({ limit: "1mb", extended: true }));
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, "../browser");
  const appEngine = new AngularNodeAppEngine();

  // Example Express Rest API endpoints
  server.post("/api/convert", (req, res) => {
    res.json(convertIPEmail(req.body, isProduction));
  });

  server.get(
    "*.*",
    express.static(browserDistFolder, {
      maxAge: "1y"
    })
  );

  server.get("/404", (req, res, next) => {
    res.send("Express is serving this server only error");
  });

  // All regular routes use the Angular engine
  server.use("*", async (req, res, next) => {
    // const { protocol, originalUrl, baseUrl, headers } = req;

    try {
      const response = await appEngine.handle(req, { server: "express" });
      if (response) {
        await writeResponseToNodeResponse(response, res);
      } else {
        next();
      }
    } catch (err) {
      next(err);
    }
  });

  return server;
}

const server = app();
if (isMainModule(import.meta.url)) {
  const port = PORT || 4000;
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

console.warn("Node Express server started");

// This exposes the RequestHandler
export const reqHandler = createNodeRequestHandler(server);
