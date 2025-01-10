import { AngularNodeAppEngine, createNodeRequestHandler, writeResponseToNodeResponse } from "@angular/ssr/node";
import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, "../browser");
  // const indexHtml = join(serverDistFolder, "index.server.html");

  const appEngine = new AngularNodeAppEngine();

  server.set("view engine", "html");
  server.set("views", browserDistFolder);

  // Example Express Rest API endpoints
  server.get("/api/**", (req, res) => {
    res.status(404).send("data requests are not supported");
  });
  // Serve static files from /browser
  server.get(
    "*.*",
    express.static(browserDistFolder, {
      maxAge: "1y"
    })
  );

  // All regular routes use the Angular engine
  server.use("*", async (req, res, next) => {
    // const { protocol, originalUrl, baseUrl, headers } = req;

    try {
      const response = await appEngine.handle(req);
      if (response) {
        console.log(response.status);
        await writeResponseToNodeResponse(response, res);
      } else {
        next();
      }
    } catch (err) {
      next(err);
    }

    // commonEngine
    //   .render({
    //     bootstrap,
    //     documentFilePath: indexHtml,
    //     url: `${protocol}://${headers.host}${originalUrl}`,
    //     publicPath: browserDistFolder,
    //     providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    //   })
    //   .then((html) => res.send(html))
    //   .catch((err) => next(err));
  });

  return server;
}

// function run(): void {
//   const port = process.env["PORT"] || 4000;
//
//   // Start up the Node server
//   const server = app();
//   server.listen(port, () => {
//     console.log(`Node Express server listening on http://localhost:${port}`);
//   });
// }
//
// run();

export const reqHandler = createNodeRequestHandler(app());
