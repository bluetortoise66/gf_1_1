function App() {
  return (
    <>
      <div className="flex w-dvw justify-center font-sans">
        <div className="card-shadow mt-[200px] w-[340px] rounded-lg bg-white p-6">
          <div className="mb-4 flex content-start gap-4">
            <div className="size-12 flex-none rounded-full bg-[url(/public/profile-thumbnail.png)] bg-cover"></div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex-none text-lg font-semibold text-neutral-900">
                Sarah Dole
              </div>
              <div className="flex-none text-sm font-normal text-neutral-600">
                @sarahdole
              </div>
            </div>
          </div>
          <div>
            <div className="text-base font-normal text-neutral-600">
              I&apos;ve been searching for high-quality abstract images for my
              design projects, and I&apos;m thrilled to have found this
              platform. The variety and depth of creativity are astounding!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
