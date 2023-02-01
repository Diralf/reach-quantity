import { useRouter } from 'next/router';
import { useApiController } from '../../contexts/ApiController';
import { CreateTargetParamsDto } from '../../types/models/create-target-params-dto';

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
