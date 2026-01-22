import HomePageImage1 from "../assets/images/homepageimage1.png";
import Logo from "../assets/images/LogoWithoutText.png";
//icons
import { MdShoppingCartCheckout } from "react-icons/md";

const HomePage = () => {
  return (
    <div>
      <nav className="bg-background-light/90 dark:bg-background-dark/90 fixed z-50 w-full border-b border-gray-200 backdrop-blur-md transition-colors duration-300 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center md:hidden">
              <button className="hover: text-gray-600 dark:text-gray-300">
                <span className="material-icons-outlined text-3xl">menu</span>
              </button>
            </div>
            <div className="flex flex-1 flex-shrink-0 items-center justify-center md:flex-none md:justify-start">
              <a className="group flex items-center gap-2" href="#">
                <img src={Logo} className="h-18 w-20" />

                <span className="font-display text-2xl font-bold tracking-wide uppercase">
                  Pranivaa
                </span>
              </a>
            </div>
            <div className="hidden space-x-8 md:flex">
              <a
                className="hover: text-sm font-medium transition-colors"
                href="#"
              >
                Shop Oils
              </a>
              <a
                className="hover: text-sm font-medium transition-colors"
                href="#about"
              >
                Our Farmers
              </a>
              <a
                className="hover: text-sm font-medium transition-colors"
                href="#process"
              >
                Process
              </a>
              <a
                className="hover: text-sm font-medium transition-colors"
                href="#"
              >
                Recipes
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800">
                <span className="material-icons-outlined text-xl dark:hidden">
                  dark_mode
                </span>
                <span className="material-icons-outlined hidden text-xl dark:inline">
                  light_mode
                </span>
              </button>
              <a className="hover: p-2 transition-colors" href="#">
                <span className="material-icons-outlined text-xl">search</span>
              </a>
              <a className="hover: relative p-2 transition-colors" href="#">
                <span className="material-icons-outlined text-xl">
                  shopping_bag
                </span>
                <span className="bg-primary absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white">
                  2
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <header className="relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-32">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="animate-fade-in-up space-y-6 text-center md:text-left">
              <span className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold tracking-wider uppercase dark:bg-green-900/30">
                100% Organic &amp; Wood Pressed
              </span>
              <h1 className="font-display text-5xl leading-tight font-bold text-gray-900 md:text-7xl dark:text-white">
                Nature's Purest <br /> <span className="italic">Essence</span>
              </h1>
              <p className="mx-auto max-w-lg text-lg leading-relaxed text-gray-600 md:mx-0 dark:text-gray-300">
                Ethically sourced directly from farmers, our wood-pressed oils
                retain all the natural nutrients and flavors for a healthier
                you.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row md:justify-start">
                <a
                  className="hover:bg-opacity-90 hover:shadow-primary/50 flex items-center justify-center gap-2 rounded-full bg-lime-800 px-8 py-4 font-medium text-white shadow-lg transition"
                  href="#bestsellers"
                >
                  Shop Now{" "}
                  <span className="material-icons-outlined text-sm">
                    <MdShoppingCartCheckout className="size-5" />
                  </span>
                </a>
                <a
                  className="flex items-center justify-center rounded-full border border-gray-300 px-8 py-4 font-medium transition hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
                  href="#process"
                >
                  See Process
                </a>
              </div>
            </div>
            <div className="relative hidden h-[500px] w-full md:block">
              <div className="bg-secondary/20 dark:bg-secondary/10 absolute top-10 right-10 h-96 w-96 rounded-full blur-3xl"></div>
              <div className="bg-primary/20 dark:bg-primary/10 absolute bottom-10 left-10 h-72 w-72 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  alt="High quality olive oil bottle in a grove"
                  className="shadow-soft h-full w-full transform rounded-3xl object-cover transition-transform duration-500 hover:scale-[1.02]"
                  src={HomePageImage1}
                />
                <div className="bg-surface-light dark:bg-surface-dark absolute bottom-8 left-[-20px] flex max-w-xs items-center gap-4 rounded-2xl border border-gray-100 p-4 shadow-xl dark:border-gray-700">
                  <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/50">
                    <span className="material-icons-outlined">
                      verified_user
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase dark:text-gray-400">
                      Certified
                    </p>
                    <p className="font-display font-bold text-gray-900 dark:text-white">
                      100% Natural
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl shadow-lg md:hidden">
              <img
                alt="Olive oil bottle"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTHBBSbggSsEztRAHat2FoKestcmhnr-yqNSyuTOhawJ3Mcp8TW3rN0oCHTiOPrxVSigPHnJ7VQFIUWPHFJwxF2_4-WKzfs9yRpK2gqYIv-mAyKOTI2EqhkJlJxDGjyGN4ajMXcrsKHBMZWqTs_Nq_75aBvqZk_OCscH0XRkEYhTt0UjJWdlzAgveoHWmkE-6UcBK-aMRmRhyCeQFkEbM2M_3bneGwSXsJt59a8PfwFOrxs3Yl47hftHdSnuOPLbFe4mIFnF1t2w"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="bg-surface-light dark:bg-surface-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-secondary text-sm font-bold tracking-widest uppercase">
              Health Benefits
            </span>
            <h2 className="font-display mt-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Why Choose Wood-Pressed?
            </h2>
            <div className="bg-primary mx-auto mt-4 h-1 w-20 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="group bg-background-light dark:bg-background-dark hover:border-primary/30 hover:shadow-soft rounded-2xl border border-transparent p-8 text-center transition-all duration-300">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 transition-transform group-hover:scale-110 dark:bg-green-900/40">
                <span className="material-icons-outlined text-3xl">
                  favorite
                </span>
              </div>
              <h3 className="font-display mb-3 text-xl font-bold dark:text-white">
                Heart Health
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Rich in monounsaturated fats and antioxidants that help maintain
                healthy cholesterol levels and support cardiovascular function.
              </p>
            </div>
            <div className="group bg-background-light dark:bg-background-dark hover:border-primary/30 hover:shadow-soft rounded-2xl border border-transparent p-8 text-center transition-all duration-300">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 transition-transform group-hover:scale-110 dark:bg-green-900/40">
                <span className="material-icons-outlined text-3xl">shield</span>
              </div>
              <h3 className="font-display mb-3 text-xl font-bold dark:text-white">
                Boosts Immunity
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Packed with natural nutrients and Vitamin E that act as powerful
                antioxidants to strengthen your body's immune system.
              </p>
            </div>
            <div className="group bg-background-light dark:bg-background-dark hover:border-primary/30 hover:shadow-soft rounded-2xl border border-transparent p-8 text-center transition-all duration-300">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 transition-transform group-hover:scale-110 dark:bg-green-900/40">
                <span className="material-icons-outlined text-3xl">spa</span>
              </div>
              <h3 className="font-display mb-3 text-xl font-bold dark:text-white">
                Skin &amp; Hair
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                The cold-press process preserves essential fatty acids that
                deeply nourish skin and strengthen hair roots naturally.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-background-light dark:bg-background-dark overflow-hidden py-20"
        id="about"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="relative w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img
                  alt="Farmer holding harvest"
                  className="h-64 w-full translate-y-8 transform rounded-2xl object-cover shadow-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYuHEbWYc-Clll9_3KWWKobKC643uCRxL4ECrG-pZ87uwwxxi_55KRvDbm11sLekvyPwdpwePQsGT1XQzlpMwDDRBEvf2ogMzFUlZMTRcjtfRzHkBJvFAdXuK1yEtNChBeedvTTl0ofDQ2dhY0n3AJFhSjEpXSqeZtnozCBf2Nd2QxC68QkYHgiGjax2ybJ73XWZttWXSxl4YIdPOzgq3TN8SiwOcZhW1wf0s6IpW5OabvD7V280q_g0zNEOANPCZAdqgHgpB-Gg"
                />
                <img
                  alt="Organic farming field"
                  className="h-64 w-full rounded-2xl object-cover shadow-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwfY6WPht3QuZD1WmPvvkYXudnMnRo4OXSVu47S7ZrPei5Vc3FpJhxfGmKK_im_TOsL1kxQ0neyY5Yrf6-rhDVWF63N5reaXWYv8WyLUamepoPwhgi0CQ4up6T8OXeXa3YPUscExBDsIkUAvmEuEe5oo3rKZ0mrcjvCHz5RIvuSE-xE4f5OBia8drSUAX2xE11AsLyXAVmge4Jve2ZuUBTAEnNjfPrDweQWNBPnVGfFyxiBKudjbvcJ9xmzoqOhWyLgBytJqDyYw"
                />
              </div>
              <div className="bg-secondary/10 absolute top-1/2 left-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-3xl"></div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="mb-2 block text-sm font-bold tracking-widest uppercase">
                Our Roots
              </span>
              <h2 className="font-display mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
                Empowering Farmers, <br />
                Delivering Purity.
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                At Pranivaa, we believe the best quality comes from the source.
                We partner directly with small-scale farmers who use
                traditional, chemical-free farming methods.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                By cutting out middlemen, we ensure fair wages for our growers
                and the freshest, most authentic wood-pressed oils for your
                kitchen. Every bottle tells a story of hard work and nature's
                bounty.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <p className="font-display text-3xl font-bold">500+</p>
                  <p className="text-sm tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    Partner Farmers
                  </p>
                </div>
                <div className="h-12 w-px bg-gray-300 dark:bg-gray-700"></div>
                <div>
                  <p className="font-display text-3xl font-bold">100%</p>
                  <p className="text-sm tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    Traceable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-surface-light dark:bg-surface-dark relative py-24"
        id="bestsellers"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-end justify-between md:flex-row">
            <div>
              <span className="text-secondary text-sm font-bold tracking-widest uppercase">
                Shop Favorites
              </span>
              <h2 className="font-display mt-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Our Best Sellers
              </h2>
            </div>
            <a
              className="hover:text-secondary mt-4 hidden items-center font-medium transition-colors md:mt-0 md:flex"
              href="#"
            >
              View All Products{" "}
              <span className="material-icons-outlined ml-1">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group bg-background-light dark:bg-background-dark overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="relative flex h-64 items-center justify-center bg-gray-100 p-6 dark:bg-gray-800">
                <img
                  alt="Groundnut Oil"
                  className="h-full transform object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110 dark:mix-blend-normal"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLGKy4AsbgOj606faNSF0wggHeu3yaSPOez8p_JH8UYphktjzxF8XC4w_KUgVW9pcpZEblVzl4CZAEWiGzrmbRvjZTOb5JVJE0a-dYRe-F3SZfykKKrflpvMex9FDiKfBP3pNK8Nng7Fc5zyvgrPz0cALe-dss2jjYM0SpNhKM3M9fsy4b9Sc02yPQmlTu6jw43RJWRoaYcYIJBubb3aY7p0iUwGJfmavcJt_mK-4GN4LvVQPk4vd9fu2FvcA6c1pyB7WCxy50lA"
                />
                <span className="absolute top-4 left-4 rounded bg-white px-2 py-1 text-xs font-bold tracking-wider uppercase shadow-sm dark:bg-gray-700">
                  Bestseller
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display mb-1 text-lg font-bold text-gray-900 dark:text-white">
                  Groundnut Oil
                </h3>
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  Wood Pressed - 1L
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$12.99</span>
                  <button className="bg-primary hover:bg-opacity-90 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md transition">
                    <span className="material-icons-outlined text-sm">
                      add_shopping_cart
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group bg-background-light dark:bg-background-dark overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="relative flex h-64 items-center justify-center bg-gray-100 p-6 dark:bg-gray-800">
                <img
                  alt="Coconut Oil"
                  className="h-full transform object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110 dark:mix-blend-normal"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwd0-i8BHRwyHeHAQ5KOz0zHxha96P-h1m3QO19Ei3t-dVYAYX9vnDvZyBA2EuA9Ohqy6Sm3zUYxWMpMNdf-ereBcbqtsYX5kLH8bduQ8YHEgH56NDexnE1KjChPZcAoMjsaSBIBp17E5RIQUsEYk-E9Xt9Tt86lnOzfklCbVD6WgkuBcGFp4PSJ0uZbWA6G5y4x2FvwhmCDpzwsWNOWIizdgdCICBUsC_P85-h0Rnb56sryvvh2EEzMR0CVuxlkzhLbFvse0BbA"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display mb-1 text-lg font-bold text-gray-900 dark:text-white">
                  Coconut Oil
                </h3>
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  Virgin Cold Pressed - 500ml
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$15.50</span>
                  <button className="bg-primary hover:bg-opacity-90 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md transition">
                    <span className="material-icons-outlined text-sm">
                      add_shopping_cart
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group bg-background-light dark:bg-background-dark overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="relative flex h-64 items-center justify-center bg-gray-100 p-6 dark:bg-gray-800">
                <img
                  alt="Sesame Oil"
                  className="h-full transform object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110 dark:mix-blend-normal"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnXOfnKimCTbIa-nKNgH57UjwcHXxQn4jjJ-Nfx9Zdq9tsTaQt0rIVVmaO2lQ84QkHlT_ZLEUCY1BuiNOMudXNqJXlHy6Kl9OWy2zoIPjcXbYyjQDhejfnNWNIWEuej2HjjTPJFS9m0gdBd3IDK_L4aLFCOnWmuvhnKM3SWSXyArj7tcxsMg4xxWtEwAs2eAhun-AMqHArCUoQ8uzJ_HWscrF4yD18qf0dqhFoF-aeLO6raD8tsjNKJ-DLyQ-otGpg90Ixwq5LZg"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display mb-1 text-lg font-bold text-gray-900 dark:text-white">
                  Black Sesame Oil
                </h3>
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  Traditional Ghani - 1L
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$18.00</span>
                  <button className="bg-primary hover:bg-opacity-90 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md transition">
                    <span className="material-icons-outlined text-sm">
                      add_shopping_cart
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group bg-background-light dark:bg-background-dark overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="relative flex h-64 items-center justify-center bg-gray-100 p-6 dark:bg-gray-800">
                <img
                  alt="Mustard Oil"
                  className="h-full transform object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110 dark:mix-blend-normal"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkMYozwVdAh5eLZNujQJL7rA1v6pSZcLcaQIPbs1AohRi_TzGbbW7xi_MEfW5Zq3j1E09quQGDqBzSmy37GpSjM8fCCkOleNYInhp-waqhCvmBNRbHN59M-hqDeHiZCFoq_oKpBLg-6xDoxW8MCl_t5xDpUuay36e_b-7_7vo_PfyHp-kxE2nlJ0RZnOC6_Y5B-yXRQJTALwEa5tGp3KmlubPtBP2h8_XYim0wHqYpt3JWIT85Cwv5jJ4x4M4KnJgzhGQds2b4-A"
                />
                <span className="bg-secondary absolute top-4 left-4 rounded px-2 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-sm">
                  New
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display mb-1 text-lg font-bold text-gray-900 dark:text-white">
                  Mustard Oil
                </h3>
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  Kachi Ghani - 1L
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$10.50</span>
                  <button className="bg-primary hover:bg-opacity-90 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md transition">
                    <span className="material-icons-outlined text-sm">
                      add_shopping_cart
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center md:hidden">
            <a
              className="hover:text-secondary inline-flex items-center font-medium transition-colors"
              href="#"
            >
              View All Products{" "}
              <span className="material-icons-outlined ml-1">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </section>
      <section
        className="bg-background-light dark:bg-background-dark py-20"
        id="process"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Purity in Every Drop
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
              From the soil to your spoon, we maintain the highest standards of
              hygiene and tradition.
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-1/3 left-0 -z-10 hidden h-0.5 w-full bg-gray-200 md:block dark:bg-gray-700"></div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="bg-surface-light dark:bg-surface-dark relative z-10 mx-auto mb-6 h-32 w-32 rounded-full border-4 border-white p-2 shadow-lg dark:border-gray-800">
                  <img
                    alt="Seeds"
                    className="h-full w-full rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB34ho8Mi3Vop_xDRqH0hAGP9YFAUuRgJWSCMO3VUxo5HfasiYxZ4dDGFSnYONZkr12LQZhk0z7ZhNzGSpI7kVTIT2dR3b3Li1ReffsC3e6eo5thzQ6BI7Xx5JMOzpG9XtsgBfZ0Q16YnfS7H8lGmF4rzQF1sa9L6a9DK9LPFRDyp5ejdFC8Nf1kA53rYIKf4-z9QPYOhR8VDQGCQp_JtL9ntZlib0c3tNHAzoCpypjqpEY7EeJaJnS0nlo00IIx4Zd49kYRbeJBA"
                  />
                  <div className="bg-primary absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full font-bold text-white">
                    1
                  </div>
                </div>
                <h4 className="font-display mb-2 text-lg font-bold dark:text-white">
                  Sourcing
                </h4>
                <p className="px-4 text-sm text-gray-600 dark:text-gray-400">
                  Hand-picked high-quality seeds from partner farms.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-surface-light dark:bg-surface-dark relative z-10 mx-auto mb-6 h-32 w-32 rounded-full border-4 border-white p-2 shadow-lg dark:border-gray-800">
                  <img
                    alt="Drying"
                    className="h-full w-full rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuATS4HqEJDy-xNyEXWACrSMBNV1bPTn1SvXFjyiKlnALwNRlIXxQc2VKtVezSQJtLw16yRXC9p5JQLOzx5rdAYRP70wDNXWEBvMDLpJdkRCRRh0HTp7gc4BmwfMs3Rsbmngld_UhTQaqXLXStyWIuRvmLFx_iHo4Z_rjZKWC6d_FNPmuCjLi5PM_UiwC8C28hPuRQw9ayVntsv18TetUs5nLeRlw6J_bWsZGlnIVHu8Mfu_cONm26j2q2px0_E0EvFVedNHMMdOJA"
                  />
                  <div className="bg-primary absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full font-bold text-white">
                    2
                  </div>
                </div>
                <h4 className="font-display mb-2 text-lg font-bold dark:text-white">
                  Sun Drying
                </h4>
                <p className="px-4 text-sm text-gray-600 dark:text-gray-400">
                  Seeds are naturally sun-dried to prevent moisture.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-surface-light dark:bg-surface-dark relative z-10 mx-auto mb-6 h-32 w-32 rounded-full border-4 border-white p-2 shadow-lg dark:border-gray-800">
                  <img
                    alt="Pressing"
                    className="h-full w-full rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRAU7DJ2GQVfMOTybi8FXPRCS0QEjI063f5TsVkkGbJsvRrymUcV6_xqqMIgbUZNtDoap-UM0nb4hhU8Puhlmhv99FDhhBHPU_fEXO2y7kU-JUyXeOxZ7Hsg7GtjYI5rfUYnGQsUpMCF5rpbkdjEf4jX8RD-cDQ867mev_rZmRdUKM5SdudPWt9YS_1wdzQN8IuW62bkigjMWU0b8jQwH57YnpNwg5vpZ1xLT1GyreLezzETaZR0tF21IjtB9esZBhWX_kxhCkNQ"
                  />
                  <div className="bg-primary absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full font-bold text-white">
                    3
                  </div>
                </div>
                <h4 className="font-display mb-2 text-lg font-bold dark:text-white">
                  Wood Pressing
                </h4>
                <p className="px-4 text-sm text-gray-600 dark:text-gray-400">
                  Slow pressed in traditional 'Ghanis' without heat.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-surface-light dark:bg-surface-dark relative z-10 mx-auto mb-6 h-32 w-32 rounded-full border-4 border-white p-2 shadow-lg dark:border-gray-800">
                  <img
                    alt="Bottling"
                    className="h-full w-full rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6UkP-a-92TJyTX6TWnpOdbdoYy997Zk61KgUG8WgQkxTGF3MCEmhykmXo2_44nvkH41dr-VgoEocZzL0X38fUcnXNytuNXa6Bw0PoxV4UQagZ_Sb4io9By3yu6FzY4PUP-B0Bbcjuja8Ua_LYRSCqPQae7ft4yZ5sMs8CWmeJT-z7nzOoBP_NaQvI8Sv2uTCh_K3_Od0S4yAs5fOWq-sqvzak3SL5OQciBt621gCe4cpp6DFHkz1yJwsHK_uJ8BDE5UgleKHChw"
                  />
                  <div className="bg-primary absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full font-bold text-white">
                    4
                  </div>
                </div>
                <h4 className="font-display mb-2 text-lg font-bold dark:text-white">
                  Filtering &amp; Bottling
                </h4>
                <p className="px-4 text-sm text-gray-600 dark:text-gray-400">
                  Naturally sedimented and packed to seal freshness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 pt-16 pb-8 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <a className="mb-6 flex items-center gap-2" href="#">
                <div className="border-primary flex h-8 w-8 items-center justify-center rounded-full border">
                  <span className="material-icons-outlined text-sm">spa</span>
                </div>
                <span className="font-display text-xl font-bold tracking-wide uppercase">
                  Pranivaa
                </span>
              </a>
              <p className="mb-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                Bringing you the goodness of nature through traditional
                wood-pressed oils. Pure, healthy, and full of love.
              </p>
              <div className="flex space-x-4">
                <a className="hover: text-gray-400 transition" href="#">
                  <i className="material-icons-outlined">facebook</i>
                </a>
                <a className="hover: text-gray-400 transition" href="#">
                  <i className="material-icons-outlined">photo_camera</i>
                </a>
                <a className="hover: text-gray-400 transition" href="#">
                  <i className="material-icons-outlined">alternate_email</i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-display mb-6 text-lg font-bold text-gray-900 dark:text-white">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a className="hover: transition" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover: transition" href="#">
                    Shop Oils
                  </a>
                </li>
                <li>
                  <a className="hover: transition" href="#">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a className="hover: transition" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display mb-6 text-lg font-bold text-gray-900 dark:text-white">
                Customer Care
              </h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a className="hover: transition" href="#">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a className="hover: transition" href="#">
                    Returns &amp; Refunds
                  </a>
                </li>
                <li>
                  <a className="hover: transition" href="#">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="hover: transition" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display mb-6 text-lg font-bold text-gray-900 dark:text-white">
                Stay Connected
              </h4>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                Subscribe to get special offers and healthy recipes.
              </p>
              <form className="space-y-2">
                <input
                  className="bg-background-light dark:bg-background-dark focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition outline-none focus:border-transparent focus:ring-2 dark:border-gray-600 dark:text-white"
                  placeholder="Your email address"
                  type="email"
                />
                <button
                  className="bg-primary hover:bg-opacity-90 w-full rounded-lg px-4 py-3 font-medium text-white shadow-md transition"
                  type="button"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © 2023 Pranivaa Oils. All rights reserved.
            </p>
            <div className="flex space-x-2">
              <span className="flex h-6 w-10 items-center justify-center rounded bg-gray-200 text-[10px] text-gray-500 dark:bg-gray-700">
                VISA
              </span>
              <span className="flex h-6 w-10 items-center justify-center rounded bg-gray-200 text-[10px] text-gray-500 dark:bg-gray-700">
                MC
              </span>
              <span className="flex h-6 w-10 items-center justify-center rounded bg-gray-200 text-[10px] text-gray-500 dark:bg-gray-700">
                PAY
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
