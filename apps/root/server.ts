import { AngularNodeAppEngine, createNodeRequestHandler, writeResponseToNodeResponse } from "@angular/ssr/node";
import express from "express";

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  // const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  // const browserDistFolder = resolve(serverDistFolder, "../browser");
  // const indexHtml = join(serverDistFolder, "index.server.html");

  const appEngine = new AngularNodeAppEngine();

  // server.set("view engine", "html");
  // server.set("views", browserDistFolder);

  // Example Express Rest API endpoints
  server.use("/api", (req, res) => {
    res.json({ message: "Your API is working!" });
  });
  // Serve static files from /browser
  // server.get(
  //   "*.*",
  //   express.static(browserDistFolder, {
  //     maxAge: "1y"
  //   })
  // );

  // All regular routes use the Angular engine
  server.use("*", async (req, res, next) => {
    // const { protocol, originalUrl, baseUrl, headers } = req;

    try {
      const response = await appEngine.handle(req);
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

export const reqHandler = createNodeRequestHandler(app());
