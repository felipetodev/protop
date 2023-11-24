function Testimonials () {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 auto-rows-[390px] md:auto-rows-[405px] lg:auto-rows-[540px] xl:auto-rows-[375px] text-protop-space">
      <div className="bg-protop-lavander p-5 md:p-10">
        <div className="flex space-x-2">
          <div className="w-8 h-8 rounded-full bg-protop-space" />
          <div className="flex flex-col gap-y-1">
            <h5 className="font-medium">Álvaro Henríquez</h5>
            <span className="font-normal">@ahenriquez_</span>
          </div>
        </div>
        <p className="mt-[30px]">
          Feugiat vivamus at augue eget. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Consequat interdum varius sit amet mattis vulputate enim nulla.
        </p>
      </div>
      <div className="bg-gray-grad-reverse md:bg-gray-gradient p-5 md:p-10">
        <div className="flex space-x-2">
          <div className="w-8 h-8 rounded-full bg-protop-space" />
          <div className="flex flex-col gap-y-1">
            <h5 className="font-medium">Alejandra Roa</h5>
            <span className="font-normal">@aleroa</span>
          </div>
        </div>
        <p className="mt-[30px]">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className="bg-protop-lavander p-5 md:p-10">
        <div className="flex space-x-2">
          <div className="w-8 h-8 rounded-full bg-protop-space" />
          <div className="flex flex-col gap-y-1">
            <h5 className="font-medium">Román Rufino</h5>
            <span className="font-normal">@romanrufino33</span>
          </div>
        </div>
        <p className="mt-[30px]">
          Cras pulvinar mattis nunc sed. Enim tortor at auctor urna nunc id cursus metus. Turpis massa sed elementum tempus egestas. Est lorem ipsum dolor sit. Amet commodo nulla facilisi nullam vehicula. Tortor vitae purus faucibus ornare suspendisse sed.
        </p>
      </div>
      <div className="bg-gray-grad-reverse md:bg-gray-gradient p-5 md:p-10">
        <div className="flex space-x-2">
          <div className="w-8 h-8 rounded-full bg-protop-space" />
          <div className="flex flex-col gap-y-1">
            <h5 className="font-medium">Amanda Barrera</h5>
            <span className="font-normal">@ama_ama</span>
          </div>
        </div>
        <p className="mt-[30px]">
          Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Enim neque volutpat ac tincidunt vitae semper quis lectus. Arcu non odio euismod lacinia at quis risus sed vulputate.
        </p>
      </div>
    </div>
  )
}

export default Testimonials
