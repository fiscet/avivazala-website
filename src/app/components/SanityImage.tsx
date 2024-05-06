import Image from 'next/image';
import urlBuilder from '@sanity/image-url';
import {
  getImageDimensions,
  type SanityImageSource,
} from '@sanity/asset-utils';
import { client } from '@lib/sanity/client';
import {
  IMAGE_ALIGNMENTS,
  IMAGE_SIZES,
  classAlignments,
  classSizes,
} from '@lib/config';

type SanityImageProps = {
  value: SanityImageSource & {
    alt?: string;
    size: (typeof IMAGE_SIZES)[number];
    alignment: (typeof IMAGE_ALIGNMENTS)[number];
  };
};

export default function SanityImage({ value }: SanityImageProps) {
  const { width, height } = getImageDimensions(value);

  return (
    <div className={`flex ${classAlignments.get(value.alignment)}`}>
      <Image
        src={urlBuilder(client).image(value).fit('max').auto('format').url()}
        width={width}
        height={height}
        alt={' '}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className={classSizes.get(value.size)}
      />
    </div>
  );
}
