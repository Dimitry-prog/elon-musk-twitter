'use client'

import { useCallback, useState } from "react";
import Input from "@/app/components/UI/Input";
import Modal from "@/app/components/Modal";
import { useLoginModal, useRegisterModal } from "@/app/store/store";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      registerModal.onClose();
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }, [registerModal]);

  const handleToggleModal = useCallback(() => {
    if (isLoading) return;
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal, isLoading]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        disabled={isLoading}
      />
      <Input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="User name"
        disabled={isLoading}
      />
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
      <p>Already have an account?&nbsp;
        <button
          onClick={handleToggleModal}
          type="button"
          aria-label="toggle modal"
          className="text-white hover:text-sky-500 transition-all duration-500"
        >
          Sign in
        </button>
      </p>
    </div>
  );

  return (
    <Modal
      label="Sign up"
      isOpen={registerModal.isOpen}
      title='Register'
      disabled={isLoading}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;