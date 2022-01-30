use warp::Filter;

#[tokio::main]
async fn main() {
    run().await;
}

async fn run() {
    let hello = warp::path!("user").map(|| "Hello, {}!");
    println!("HELLO");
    warp::serve(hello).run(([127, 0, 0, 1], 1338)).await;
}
