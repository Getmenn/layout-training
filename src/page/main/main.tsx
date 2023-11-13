import { Companies } from '@/widget/companies/companies';
import { Footer } from '@/widget/footer/footer';
import { Header } from '@/widget/header/header';
import { MainScreen } from '@/widget/mainScreen/mainScreen';
import { MaxWhiteness } from '@/widget/maxWhiteness';
import { Products } from '@/widget/products';
import { Sketchbook } from '@/widget/sketchbook/sketchbook';

export const Main = () => {
    return (
        <>
            <Header />
            <MainScreen />
            <MaxWhiteness />
            <Products />
            <Companies />
            <Sketchbook />
            <Footer />
        </>
    );
};
