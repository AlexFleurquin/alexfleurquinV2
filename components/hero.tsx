import Image from 'next/image';
import Particles from './particles';
import Illustration from '@/public/images/glow-bottom.svg';
import Illustration02 from '@/public/images/glow-top.svg';

export default function Hero() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6" data-aos="fade-down">
              <div className="inline-flex relative">
                <span className="btn-xs bg-transparent rounded-full p-1 shadow-xl border border-slate-400">
                  <div className="badge bg-gradient-to-r from-blue-400 to-orange-200 text-gray-900">
                    Nouveau
                  </div>

                  <span className="pr-1 bg-gradient-to-r text-transparent bg-clip-text from-blue-400 to-orange-200 text-xs">
                    A l'écoute d'opportunités |
                  </span>
                  <a
                    className="pl-1 pr-2 hover:text-gray-700 dark:hover:text-white text-gray-400 transition duration-200 text-xs"
                    href="/pdf/Resume_Alexandre_Fleurquin.pdf"
                    target="_blank"
                  >
                    Découvrir mon CV &rarr;
                  </a>
                </span>
              </div>
            </div>
            <h1
              className="h1 font-bricolage bg-clip-text text-transparent bg-slate-900 dark:bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4"
              data-aos="fade-down"
            >
              Alexandre{' '}
              <span className="font-bricolage font-bold bg-gradient-to-r text-transparent bg-clip-text from-blue-400 to-orange-200">
                {' '}
                FLEURQUIN
              </span>
            </h1>
            <p
              className="text-lg font-bricolage text-slate-600 dark:text-slate-300 mb-8"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Consultant Product basé à Bordeaux, j'accompagne mes clients{' '}
              <br></br> dans la digitalisation de leurs services.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div>
                <a
                  className="btn font-bricolage bg-slate-800 text-slate-100 dark:text-slate-900 dark:bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
                  href="#0"
                >
                  Me contacter
                </a>
              </div>
              <div>
                <a
                  className="btn font-bricolage dark:text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group border border-slate-800 dark:[background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-transparent before:rounded-lg before:pointer-events-none"
                  href="#0"
                >
                  <svg
                    className="shrink-0 fill-slate-300 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>Consulter mes réalisations</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
