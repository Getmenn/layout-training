import PaperImage from '@/shared/assets/images/paper.png';
import { Button } from '@/shared/ui/button/button';
import { Title } from '@/shared/ui/title/title';

import s from './mainScreen.module.scss';

export const MainScreen = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.textWrapper}>
                    <Title size="big" className={s.title}>
                        Простые вещи. Из бумаги
                    </Title>
                    <p className={s.description}>
                        Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский)
                        — волокнистый материал с минеральными добавками.
                    </p>
                    <Button content="Каталог" />
                </div>
                <div className={s.imageWrapper}>
                    <img src={PaperImage} className={s.paperImage} alt="paper" />
                </div>
            </div>
        </div>
    );
};
