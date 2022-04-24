function HomePage(): JSX.Element {
  return (
    <div className="relative flex min-h-screen flex-col bg-gray-50">
      <div className="sticky top-0">
        <header className="flex h-16 flex-row items-center border-b bg-white px-4">
          <p className="flex-1">logo</p>
        </header>
      </div>
      <main className="flex-1">
        <article className="bg-white">
          <section>
            <header className="bg-gradient-to-r from-blue-700 to-blue-300">
              <div className="space-y-4 px-4 py-4">
                <h2 className="text-center text-2xl font-semibold text-white">
                  何をデザインしますか？
                </h2>
                <form>
                  <input
                    className="relative w-full px-2 py-2"
                    type="text"
                    placeholder="あらゆるものを検索"
                  />
                </form>
              </div>
              <div className="flex flex-row overflow-x-scroll">
                <div className="h-20 w-[100px] flex-shrink-0 bg-pink-200"></div>
                <div className="h-20 w-[100px] flex-shrink-0 bg-pink-300"></div>
                <div className="h-20 w-[100px] flex-shrink-0 bg-pink-400"></div>
                <div className="h-20 w-[100px] flex-shrink-0 bg-pink-500"></div>
              </div>
            </header>
            <footer className="bg-gray-200">
              <div className="py-4">
                <div className="flex flex-row overflow-x-scroll">
                  <div className="h-20 w-[100px] flex-shrink-0 bg-pink-200"></div>
                  <div className="h-20 w-[100px] flex-shrink-0 bg-pink-300"></div>
                  <div className="h-20 w-[100px] flex-shrink-0 bg-pink-400"></div>
                  <div className="h-20 w-[100px] flex-shrink-0 bg-pink-500"></div>
                </div>
              </div>
            </footer>
          </section>
        </article>

        <section className="space-y-20 px-4 py-4">
          <section>
            <div className="h-40 w-full bg-blue-500"></div>
            <h3 className="mt-4 text-lg font-semibold">早速アイデアを形に</h3>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              soluta minima
            </p>
            <button className="mt-4 bg-purple-500 px-6 py-2 text-sm text-white">
              デザインをはじめる
            </button>
          </section>
          <section>
            <div className="h-40 w-full bg-blue-500"></div>
            <h3 className="text-lg font-semibold">簡単に共同作業</h3>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              soluta minima
            </p>
            <button className="mt-4 bg-purple-500 px-6 py-2 text-sm text-white">
              デザインをはじめる
            </button>
          </section>
          <section>
            <div className="h-40 w-full bg-blue-500"></div>
            <h3 className="text-lg font-semibold">
              簡単に共同自信を持って公開する作業
            </h3>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              soluta minima
            </p>
            <button className="mt-4 bg-purple-500 px-6 py-2 text-sm text-white">
              デザインをはじめる
            </button>
          </section>
        </section>
      </main>
    </div>
  )
}
export default HomePage
