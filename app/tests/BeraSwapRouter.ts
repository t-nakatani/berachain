import { beraSwapRouter } from "../../backend-service/retriever/BeraSwapRouter";

async function main() {
    const route = await beraSwapRouter.getBeraSwapRoute(
        "0x7507c1dc16935B82698e4C63f2746A2fCf994dF8",
        "0x0E4aaF1351de4c0264C5c7056Ef3777b41BD8e03",
        "100000000000000000"
    );
    console.log(route.steps);
}

main();
