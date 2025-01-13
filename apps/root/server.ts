import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse
} from "@angular/ssr/node";
import express from "express";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, "../browser");
  const appEngine = new AngularNodeAppEngine();

  // Example Express Rest API endpoints
  server.use("/api/**", (req, res) => {
    res.json({ message: "Your API is working!" });
  });

  // Serve static files from /browser
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
  const port = process.env["PORT"] || 4000;
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:\${port}`);
  });
}

console.warn("Node Express server started");

// This exposes the RequestHandler
export const reqHandler = createNodeRequestHandler(server);
