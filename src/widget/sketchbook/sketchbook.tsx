import SketchbookImage from '@/shared/assets/images/sketchbook.png';
import SketchbookBigImage from '@/shared/assets/images/sketchbookBig.png';
import { Button } from '@/shared/ui/button/button';
import { Title } from '@/shared/ui/title/title';

import s from './sketchbook.module.scss';

export const Sketchbook = () => {
    return (
        <div className={s.sketchbook}>
            <div className={s.container}>
                <div className={s.content}>
                    <Title size="standard">
                        Simple скетчбук
                    </Title>
                    <p>
                        80 листов, твердая обложка, бумага  Fabriano 200 г/м2.
                        Подойдет и для графики и для акварели. Для самых смелых творческих замыслов!
                    </p>
                    <Button className={s.button} content="Купить" />
                </div>
                <img src={SketchbookImage} className={s.sketchbook} alt="sketchbook" />
                <img src={SketchbookBigImage} className={s.sketchbookBig} alt="sketchbook" />
            </div>
        </div>
    );
};
