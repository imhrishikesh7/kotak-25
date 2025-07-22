import Reveal from '../Reveal';
export default function BOD() {

  return (
    <div className=" bg-white py-12 px-4">
      <div className="marginal mx-auto">


        <div className='text-center flex flex-col justify-center h-full mb-5'>
          <Reveal animation="slide-up">
            <h3 className="text-2xl font-bold text-[#ed1c25]">Board of Directors</h3>
          </Reveal>
          <div className='flex w-[50px] my-2 mx-auto'>
            <div className='h-[2px] bg-[#ed1c25] w-1/2 mx-auto' />
            <div className='h-[2px] bg-[#013367] w-1/2 mx-auto' />
          </div>
          <Reveal animation="slide-up">
            <h1 className="text-3xl md:text-[3.5vw] pb-2 font-ligh text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">Guardians of your trust</h1>
          </Reveal>
        </div>
        <div className="relative group">
          <div
            className="h-full w-[100%] rounded-4xl flex items-center justify-center"
          >
            <img src="./home/IMG-06.webp" className='h-full rounded-3xl' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
