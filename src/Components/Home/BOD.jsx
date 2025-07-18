import Reveal from '../Reveal';
export default function BOD() {

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="marginal mx-auto">
        <div className='w-fit mb-10 mx-auto text-center'>
          <Reveal animation="slide-up">
            <h3 className="text-2xl mb-3 font-bold text-[#ed1c25] pb-2 border-b border-gray-400">Board of Directors</h3>
          </Reveal>
          <Reveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">
              Guardians of your trust
            </h1>
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
