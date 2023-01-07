import { useRouter } from 'next/router';

interface HookProps {
  handleSubmit(): void;
}

interface Props {
  redirectTo: string;
}

const useTargetQuantitySubmit = ({ redirectTo }: Props): HookProps => {
  const router = useRouter();

  const handleSubmit = (): void => {
    router.push(redirectTo);
  };

  return {
    handleSubmit,
  };
};

export default useTargetQuantitySubmit;
