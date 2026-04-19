import FadeIn from "../fadeIn/fadeIn.jsx";
import TypeWriter from "../type-writer/type-writer.jsx";
import liaSvg from "../../assets/lia.svg";



const Home = () => {
  return (
   <main className="flex flex-col bg-[url('./assets/bg.png')] bg-no-repeat bg-center w-full" id="home">
    <section className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 md:mb-0 mb-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen">
      <div className="w-full flex flex-col ">
        <div>
            <FadeIn delay={0.15}>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-black" > 
                    Hi, <br/> <TypeWriter
                            texts={["I am Zahra"]}
                            typingSpeed={80}
                            deletingSpeed={40}
                            pauseAfterType={1800}
                        />
                </span>
                <span className="block text-blue-500 z-0 lg:inline">Front End Developer</span>
            </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
            <p className="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I am a Front-End Developer who spent 4 years mastering Angular,
                and is now crafting seamless experiences with React!
            </p>
            </FadeIn>
        </div>
        <div className="flex md:justify-start gap-3 mt-5">
             <a href="https://www.linkedin.com/in/zahraaledavood/">
                <img src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png" alt="linkedin" />
            </a>
            <a href="https://github.com/zahraaledavood">
                <img src="https://img.icons8.com/doodle/40/000000/github--v1.png" alt="github" />
            </a>
        </div>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transpaent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                 href="https://mstorage2.jobinjacdn.com/records/files/uploads/documents/ad1f32c8-f88a-45dd-9d9b-38c019465ff4.pdf?requester=322e3137382e36352e3935&resource=753a31363731303936&from=6170706c69636174696f6e5f666f726d&X-Amz-Content-Sha256=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=oetSom924MQvtCRu9N6vvQ4bt8cG9HSpRnxWU756SyWy5NVt6nTpmfA9aV2b%2F20260419%2F%2Fs3%2Faws4_request&X-Amz-Date=20260419T110112Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1800&X-Amz-Signature=a43330d658599b3f9f53ef2310da5d38a9e6da8b73dcd7a2d2172b4f142c2f97">
                    Resume
                </a>
            </div>
        </div>
      </div>
      <img src={liaSvg} alt="portfolio" className="md:w-3/6 hidden sm:block" />
    </section>
   </main>
  );
};

export default Home;
