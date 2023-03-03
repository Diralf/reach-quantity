import { CreateTargetParamsDto } from '@reach-quantity/types';
import { useRouter } from 'next/router';
import { useApiController } from '../../contexts/ApiController';

interface HookProps {
  handleSubmit(params: CreateTargetParamsDto): Promise<void>;
}

interface Props {
  redirectTo: string;
}

const useTargetQuantitySubmit = ({ redirectTo }: Props): HookProps => {
  const { createTarget } = useApiController();
  const router = useRouter();

  const handleSubmit = async (params: CreateTargetParamsDto): Promise<void> => {
    await createTarget(params);
    await router.push(redirectTo);
  };

  return {
    handleSubmit,
  };
};

export default useTargetQuantitySubmit;
