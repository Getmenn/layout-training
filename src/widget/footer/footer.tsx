import Facebook from '@/shared/assets/svg/social/facebook.svg';
import Instagram from '@/shared/assets/svg/social/instagram.svg';
import Twitter from '@/shared/assets/svg/social/twitter.svg';
import Youtube from '@/shared/assets/svg/social/youtube.svg';
import { Logo } from '@/shared/ui/logo/logo';

import s from './footer.module.scss';

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <Logo theme="light" className={s.logo} />
                <div className={s.social}>
                    <Facebook />
                    <Twitter />
                    <Instagram />
                    <Youtube />
                </div>
            </div>
            <div className={s.simple}>
                Simple ® 2021
            </div>
        </div>
    );
};
