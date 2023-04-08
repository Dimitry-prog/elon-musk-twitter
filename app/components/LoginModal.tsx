'use client'

import { useCallback, useState } from "react";
import Input from "@/app/components/UI/Input";
import Modal from "@/app/components/Modal";
import { useLoginModal, useRegisterModal } from "@/app/store/store";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      loginModal.onClose();
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  const handleToggleModal = useCallback(() => {
    if (isLoading) return;
    loginModal.onClose();
    registerModal.onOpen();
  }, [registerModal, loginModal, isLoading]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        disabled={isLoading}
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-center dark:text-slate-200/80">
      <p>First time at Elon Musk dogeCoin?&nbsp;
        <button
          onClick={handleToggleModal}
          type="button"
          aria-label="toggle modal"
          className="text-white hover:text-sky-500 transition-all duration-500"
        >
          Sign up
        </button>
      </p>
    </div>
  );

  return (
    <Modal
      label="Sign in"
      isOpen={loginModal.isOpen}
      title='Login'
      disabled={isLoading}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;