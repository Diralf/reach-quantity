import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

interface ChildrenProps {
  handleSubmit(): void;
}

interface Props {
  redirectTo: string;

  children(props: ChildrenProps): ReactNode;
}

const TargetQuantitySubmitHandler: React.FC<Props> = ({
  redirectTo,
  children,
}) => {
  const router = useRouter();

  const handleSubmit = (): void => {
    router.push(redirectTo);
  };

  return <>{children({ handleSubmit })}</>;
};

export default TargetQuantitySubmitHandler;
