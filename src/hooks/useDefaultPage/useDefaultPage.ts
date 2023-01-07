import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface Props {
  defaultPage: string;
}

const useDefaultPage = ({ defaultPage }: Props): void => {
  const router = useRouter();

  useEffect(() => {
    router.push(defaultPage);
  });
};

export default useDefaultPage;
