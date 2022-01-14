import { Client, hooks } from "./deps.ts";

export function hookIt(): void {
  console.info("hookIt: started");

  hooks(Client, {
    queryArray: [
      async (context: any, next: any) => {
        console.info("\n*** Hooked it ***\n");
        console.info("***** BEGIN hooks.queryArray.context *****\n\n", context);
        console.info("\n***** END hooks.queryArray.context *****\n");
        await next();
      },
    ],
  });

  console.info("hookIt: ended");
}
