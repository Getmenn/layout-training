import FolderImage from '@/shared/assets/images/folder.png';
import ItemImageOne from '@/shared/assets/images/resultItem1.png';
import ItemImageTwo from '@/shared/assets/images/resultItem2.png';
import ItemImageThree from '@/shared/assets/images/resultItem3.png';
import { Title } from '@/shared/ui/title/title';

import { ResultItem } from '../resultItem/resultItem';
import s from './maxWhiteness.module.scss';

const resultItems = [
    {
        image: ItemImageOne,
        title: 'V.1',
        description: 'Результат вашего обучения',
    },
    {
        image: ItemImageTwo,
        title: 'V.2',
        description: 'Результат вашего обучения',
    },
    {
        image: ItemImageThree,
        title: 'V.3',
        description: 'Результат вашего обучения',
    },
];

export const MaxWhiteness = () => {
    return (
        <div className={s.maxWhiteness}>
            <div className={s.container}>
                <div className={s.resultsWrapper}>
                    {resultItems.map((item) => (
                        <ResultItem image={item.image} title={item.title} description={item.description} />
                    ))}
                </div>
                <div className={s.contentBlock}>
                    <img src={FolderImage} className={s.folderImage} alt="folder" />
                    <div className={s.content}>
                        <Title size="standard">
                            Максимальная белизна
                        </Title>
                        <p>
                            Для повышения белизны, гладкости и мягкости в состав бумажной массы вводят белые
                            минеральные вещества: мел, тальк, каолин и др. Эта операция называется наполнением.
                            Отлив бумажного листа осуществляют на бумагоделательной машине, важнейшей частью
                            которой является непрерывно движущаяся (как транспортер) металлическая или капроновая сетка.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
