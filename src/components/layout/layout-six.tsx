import { useSessionStorage } from 'react-use';
import Link from '@components/ui/link';
import HighlightedBar from '@components/common/highlighted-bar';
import Header from '@components/layout/header/header-six';
import Footer from '@components/layout/footer/footer';
import MobileNavigation from '@components/layout/mobile-navigation/mobile-navigation';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';
import { useTranslation } from 'next-i18next';
import { useIsMounted } from '@utils/use-is-mounted';

function ClientRenderedHightLightedBar() {
  const { t } = useTranslation('common');
  const [highlightedBar, setHighlightedBar] = useSessionStorage(
    'borobazar-highlightedBar',
    'false'
  );
  return (
    <>
      {highlightedBar !== 'true' && (
        <HighlightedBar
          onClose={() => setHighlightedBar('true')}
          className="text-brand-light]"
        >
          <div className="text-sm font-medium py-0.5 ltr:pr-6 rtl:pl-6">
            <span>
              {t(
                '35% Exclusive discount plus free next day delivery, excludes sale'
              )}
              <Link
                href="#"
                className="opacity-80 inline-flex text-xs uppercase font-bold ltr:pl-1.5 rtl:pr-1.5 items-center relative transition-all hover:opacity-100"
              >
                <span className="border-b border-brand-light inline-block pb-0.5">
                  Learn More
                </span>
                <IoChevronForwardCircleOutline className="text-xl ltr:ml-1 rtl:mr-1 relative -top-0.5" />
              </Link>
            </span>
          </div>
        </HighlightedBar>
      )}
    </>
  );
}

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  const isMounted = useIsMounted();

  return (
    <div className="flex flex-col min-h-screen">
      {isMounted && <ClientRenderedHightLightedBar />}
      {/* End of highlighted bar  */}

      <Header />
      <main
        className="relative flex-grow"
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </main>
      <Footer />
      <MobileNavigation />
    </div>
  );
}
