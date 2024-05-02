import { Person } from "@/types/person";
import Image from "next/image";

const SinglePerson = ({ person }: { person: Person }) => {
  const { name, image, paragraph, tags } = person;
  return (
    <>
      <div className="group relative m-10 overflow-hidden rounded-xl bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <div className="relative block aspect-[37/22] w-full">
          <Image
            src={image}
            alt="image"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3 className="mb-4">
            <div className="block text-xl font-bold text-primary sm:text-2xl">
              {name}
            </div>
            <span className="text-md mb-12 font-semibold capitalize text-black dark:text-white">
              {tags[0]}
            </span>
          </h3>
          <p className="text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default SinglePerson;
