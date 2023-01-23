import { useRouter } from 'next/router';
import { CreateTargetParams } from '../../types/models/create-target-params';
import useCreateTarget from '../api/useCreateTarget';

interface HookProps {
  handleSubmit(params: CreateTargetParams): Promise<void>;
}

interface Props {
  redirectTo: string;
}

const useTargetQuantitySubmit = ({ redirectTo }: Props): HookProps => {
  const { createTarget } = useCreateTarget();
  const router = useRouter();

  const handleSubmit = async (params: CreateTargetParams): Promise<void> => {
    await createTarget(params);
    await router.push(redirectTo);
  };

  return {
    handleSubmit,
  };
};

export default useTargetQuantitySubmit;
