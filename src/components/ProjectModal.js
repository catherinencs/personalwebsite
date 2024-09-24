import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Slider from 'react-slick'; 

const ProjectModal = ({ isOpen, onClose, projectName, frameworks, bullets, visitLink, images }) => {
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto pt-16">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-customCream border-2 border-black p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-6 text-gray-900"
                >
                  {projectName}
                </Dialog.Title>

                {/* Slideshow of images */}
                <div className="my-6">
                  <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                      <div key={index} className="px-2">
                        <img
                          src={image}
                          alt={`Slide ${index + 1}`}
                          className="w-full max-h-64 object-contain rounded-lg" 
                        />
                      </div>
                    ))}
                  </Slider>
                </div>

                {/* Project Frameworks */}
                <div className="flex space-x-2 my-4">
                  {frameworks.map((framework, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-200 rounded-full text-sm">
                      {framework}
                    </span>
                  ))}
                </div>

                {/* Project Description and Bullets */}
                <div className="mt-2">
                  <ul className="list-disc pl-6 text-gray-600">
                    {bullets.map((bullet, index) => (
                      <li key={index} className="mb-2">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Centered Visit button */}
                <div className="mt-6 flex justify-center">
                  <a href={visitLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-customBlue text-black rounded-lg">
                    Visit site
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectModal;
