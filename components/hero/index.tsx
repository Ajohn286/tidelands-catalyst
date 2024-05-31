import Image from 'next/image';
import Raider from "./Raider-collection-graphic.jpg";
import Cam from "./Cameron-Kirkconnell-2.jpg";
import RPS from "./RPS-extendedBreakaway_b71d79a5-18aa-47c2-a02d-369e92a0d01e_800x.webp";

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

export const Hero = () => (
  <Slideshow>
    <SlideshowContent>
      <SlideshowSlide>
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <Image
              alt="an assortment of brandless products against a blank background"
              className="object-cover"
              layout="fill"
              priority
              sizes="(max-width: 1536px) 100vw, 1536px"
              src={Raider}
            />
          </div>

          <div className="flex flex-col gap-4 px-12 pb-48 pt-36">
            <h2 className="text-5xl font-black lg:text-6xl">25% Off Sale</h2>
            <p className="max-w-xl">
              Any cart over $300 will receive a 25% discount.
            </p>
            <Button asChild className="w-fit">
              <a href="/#">Shop now</a>
            </Button>
          </div>
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <Image
              alt="an assortment of brandless products against a blank background"
              className="object-cover"
              layout="fill"
              priority
              sizes="(max-width: 1536px) 100vw, 1536px"
              src={Cam}
            />
          </div>

          <div className="flex flex-col gap-4 bg-gray-100 px-12 pb-48 pt-36">
            <h2 className="text-5xl font-black lg:text-6xl">Great Deals</h2>
            <p className="max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <Button asChild className="w-fit">
              <a href="/#">Shop now</a>
            </Button>
          </div>
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <Image
              alt="an assortment of brandless products against a blank background"
              className="object-cover"
              layout="fill"
              priority
              sizes="(max-width: 1536px) 100vw, 1536px"
              src={RPS}
            />
          </div>

          <div className="flex flex-col gap-4 bg-gray-100 px-12 pb-48 pt-36">
            <h2 className="text-5xl font-black lg:text-6xl">Low Prices</h2>
            <p className="max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <Button asChild className="w-fit">
              <a href="/#">Shop now</a>
            </Button>
          </div>
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

