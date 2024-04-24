import { Person } from "@/types/person";
import Image from "next/image";

const SinglePerson = ({ person }: { person: Person }) => {
  const { name, image, paragraph, tags } = person;
  return (
    <>
      <div className="group relative m-10 overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <div className="relative block aspect-[37/22] w-full">
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill />
        </div>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <div className="mb-4 block text-xl font-bold text-primary sm:text-2xl">
              {name}
            </div>
          </h3>
          <p className="mb-6 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default SinglePerson;
