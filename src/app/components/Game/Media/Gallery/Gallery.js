import { Fragment, useState } from 'react';
import styles from './Gallery.module.scss'
import { Image } from 'semantic-ui-react';
import { map } from 'lodash';
import { FullModal } from '@/app/components/Shared';
import Slider from 'react-slick';

export function Gallery(props) {
  const {screenshots} = props;
  const screenshotsClone = [...screenshots];
  const principalImage = screenshotsClone.shift();

  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow(prevState => !prevState);

  const settings = {
    dots: true,
    dotsClass: styles.dots,
    infinite: true,
    slidersToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: function (index) {
      return <Image src={screenshots && screenshots[index]?.url} />
    }
  }; 

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.principal}>
          <Image src={principalImage?.url ?? ''} onClick={onOpenClose}/>
        </div>
        <div className={styles.grid}>
          {map(screenshotsClone, (screenshot) => (
            <div key={screenshot?.id}>
              <Image src={screenshot?.url ?? ''} onClick={onOpenClose}/>
            </div>
          ))}
        </div>
      </div>
      <FullModal show={show} onClose={onOpenClose}>
        <div className={styles.carouselContainer}>
          <Slider {...settings}>
            {map(screenshots, (screenshot) => (
              <div key={screenshot?.id}>
                <Image src={screenshot?.url ?? ''} />
              </div>
            ))}
          </Slider>
        </div>
      </FullModal>
    </>
  )
}
