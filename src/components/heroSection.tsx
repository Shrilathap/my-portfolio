'use client';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, Buddy</h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas sit amet nisi efficitur, malesuada lectus ac, venenatis lacus.
                        Nam sodales finibus nulla id iaculis. Aliquam fermentum dapibus congue.
                        Aenean tellus tortor, lacinia ac lobortis eget, mollis vel erat.
                        Mauris molestie metus enim, interdum accumsan ligula euismod vitae.
                        In congue mauris lobortis odio sagittis aliquet. Vivamus gravida eros erat.
                        Suspendisse potenti.</p>
                </div>
                <div className="col-span-5"></div>
            </div>
        </section>
    )
}

export default HeroSection;