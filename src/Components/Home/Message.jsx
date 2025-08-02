import KnowMore from "../KnowMore";
import Reveal from "../Reveal";

const Message = () => {
    return (
        <div className="!mb-12 arginal">
              <div className="md:w-fit mx-auto  mb-6 text-center">
                <div className='space-y-2'>
                    {/* Technology Badge */}
                    <Reveal animation="slide-up mx-aut text-cente">
                        <div className="inline-flex mx-aut flex-col md:items-start">
                            <span className="text-xs md:text-lg font-bold text-[#ed1c25] tracking-wide  mb-2">
                                Message from Ashok Vaswani
                            </span>
                            {/* Centered decorative line for mobile */}
                            <div className='flex w-12 mx-auto md:w-16'>
                                <div className='h-[2px] bg-[#ed1c25] w-1/2' />
                                <div className='h-[2px] bg-[#013367] w-1/2' />
                            </div>
                        </div>
                    </Reveal>

                    {/* Main Title - Much smaller for mobile */}
                    <Reveal animation="slide-up">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-ligh leading-snug text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text md:px-0">
                            Transforming for scale
                        </h1>
                    </Reveal>
                </div>
            </div>
           <div className="relative hidden md:block marginal rounded-4xl w-full overflow-hidden" style={{ height: "76vh" }}>
    <img
        src="./home/ceo-banner.webp"
        alt="CEO Banner"
        className="w-full h-full rounded-3xl object-contain"
    />
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

            <div className="block  md:hidden">
                <img src="./AshokMessage/Ashok.webp" className="" alt="" />
                <div className="w-fit mx-auto mt-4">
                    <KnowMore to={"/message-from-ashok-vaswani"} />
                </div>
            </div>
        </div>

    );
};

export default Message;
