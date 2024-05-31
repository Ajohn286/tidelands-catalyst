import Image from 'next/image';
import Image2 from './60.1716948093341.HVkIbm7WfAXPogfSkYUHX4IiDIcYqu1TD-dkjUUZj9o=.webp';
import  Image3  from './Cameron-Kirkconnell-2.jpg'
import  Imag4  from './RPS-extendedBreakaway_b71d79a5-18aa-47c2-a02d-369e92a0d01e_800x.webp'
import  Image5  from './Screenshot 2024-05-25 at 10.03.21 AM.png'
import { Button } from '~/components/ui/button';
import {
  Slideshow,
  SlideshowAutoplayControl,
  SlideshowContent,
  SlideshowControls,
  SlideshowNextIndicator,
  SlideshowPagination,
  SlideshowPreviousIndicator,
  SlideshowSlide,
} from '~/components/ui/slideshow';

import SlideshowBG from './slideshow-bg-01.jpg';

export const Hero = () => (
  <Slideshow>
    <SlideshowContent>
      <SlideshowSlide>
        <div className="relative">
          <div className="flex flex-col gap-4 px-12 pb-48 pt-36">
            <Image
              alt="Spearo"
              className="absolute -z-10 object-cover"
              fill
              priority
              sizes="(max-width: 1536px) 100vw, 1536px"
              src={Image2}
            />
            <h2 className="text-5xl font-white lg:text-6xl">25% Off Sale</h2>
            <p className="max-w-xl">
              Site wide sales on all orders over $300.
            </p>
            <Button asChild className="w-fit">
              <a href="/#">Shop now</a>
            </Button>
          </div>
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="flex flex-col gap-4 bg-gray-100 px-12 pb-48 pt-36">
          <Image
            alt="Spearo"
            className="absolute -z-10 object-cover"
            fill
            priority
            sizes="(max-width: 1536px) 100vw, 1536px"
            src={Image3}
            />
          <h2 className="text-5xl font-white lg:text-6xl">Cam Kirkconnells Trips to the Tropics</h2>
          <p className="max-w-xl">
            Finding Big Tuna and Oneself
          </p>
          <Button asChild className="w-fit">
            <a href="/#">Read the Blog</a>
          </Button>
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="flex flex-col gap-4 bg-gray-100 px-12 pb-48 pt-36">
        <Image
            alt="Spearo"
            className="absolute -z-10 object-cover"
            fill
            priority
            sizes="(max-width: 1536px) 100vw, 1536px"
            src={Image5}
          />
          <h2 className="text-5xl font-white lg:text-6xl">Life of the Bajau</h2>
          <p className="max-w-xl">
            What 2000 years of freediving can teach us.
          </p>
          <Button asChild className="w-fit">
            <a href="/#">Read Here</a>
          </Button>
        </div>
      </SlideshowSlide>
    </SlideshowContent>
    <SlideshowControls>
      <SlideshowAutoplayControl />
      <SlideshowPreviousIndicator />
      <SlideshowPagination />
      <SlideshowNextIndicator />
    </SlideshowControls>
  </Slideshow>
);
