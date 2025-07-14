import KnowMore from "../KnowMore";
import Reveal from "../Reveal";

const Message = () => {
    return (
        <div className="mb-12">
            <div className='w-fit mx-auto md:mb-12 text-center'>
                <Reveal animation="slide-up">
                    <h3 className="text-2xl mb-3 font-bold text-[#ed1c25] pb-2 border-b border-gray-400">Message from Ashok Vaswani</h3>
                </Reveal>
                <Reveal animation="slide-up">
                    <h1 className="text-3xl md:text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">Transforming for scale</h1>
                </Reveal>

            </div>
            <div
                className="relative hidden md:block marginal rounded-4xl w-full overflow-hidden"
                style={{
                    height: "80vh", // consistent vertical space on desktops
                    backgroundImage: `url(./home/ceo-banner.webp)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover", // Fill the container with cropping (better than contain)
                    backgroundPosition: "top",
                }}
            >
                <div
                    className="absolute -translate-x-1/2"
                    style={{
                        left: "50%",
                        bottom: "8vh",
                    }}
                >
                    <KnowMore to={"/message-from-ashok-vaswani"} />
                </div>
            </div>
            <div className="block md:hidden marginal">
                <img src="./AshokMessage/Ashok.webp" alt="" />
                <div className="w-fit mx-auto mt-4">
                    <KnowMore to={"/message-from-ashok-vaswani"} />
                </div>
            </div>
        </div>

    );
};

export default Message;
