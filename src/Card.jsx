const Card = () => {
  return (
    <div className="flex w-dvw justify-center font-sans">
      <figure className="card-shadow mt-[200px] w-[340px] rounded-lg bg-white p-6">
        <figcaption className="mb-4 flex content-start gap-4">
          <img
            className="size-12 flex-none rounded-full object-cover"
            alt="Profile Photo"
            src="public/profile-thumbnail.png"
          />
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex-none text-lg font-semibold text-neutral-900">
              Sarah Dole
            </div>
            <div className="flex-none text-sm font-normal text-neutral-600">
              @sarahdole
            </div>
          </div>
        </figcaption>
        <blockquote>
          <p className="text-base font-normal text-neutral-600">
            I&apos;ve been searching for high-quality abstract images for my
            design projects, and I&apos;m thrilled to have found this platform.
            The variety and depth of creativity are astounding!
          </p>
        </blockquote>
      </figure>
    </div>
  );
};

export default Card;
