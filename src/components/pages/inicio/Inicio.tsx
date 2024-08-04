import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AuthUser } from '../../../utils/apolloClient';
import { useState } from 'react';


interface FormData {
  apiKey: string;
}

export const Inicio = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    const { apiKey } = data;
    const token = await AuthUser();

    if (token) {
      navigate("/home");
    } else {
      setErrorMessage("La clave API es incorrecta.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto bg-blue1 h-135 -mb-18">
        <div className="ml-10 text-white font-bold text-xl mt-10">SIGN IN</div>
        <div className="font-medium text-gray-600 ml-10 mt-10">Enter your API key to sign in</div>
      </div>
      <div className="max-w-md w-full mx-auto mt-16 bg-white p-32 border border-gray-300">
        <form action="" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            {errorMessage && <div className="text-red-500 text-sm -mt-5 mb-10">{errorMessage}</div>}
            <label htmlFor="apiKey" className="text-sm font-bold text-gray-500 mb-5 block">API Key</label>
            <input
              {...register("apiKey", { required: "API Key is required" })}
              name="apiKey"
              type="text"
              placeholder="API Key"
              className="font-worksansM w-full p-2 border text-center border-gray-300 rounded-6 mt-1 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg"
            />
            {errors.apiKey && <span className="text-red-500 text-sm">{errors.apiKey.message}</span>}
          </div>
          <div className="flex justify-center">
            <button className="font-worksansM w-full py-12 bg-green-400 hover:bg-green-600 rounded-6 text-white text-sm">Sign In</button>
          </div>
          <div>
            <p className="text-sm ml-10 text-blue1 -mt-10">Not registered yet? Create an account</p>
          </div>
          <div className="grid grid-flow-col justify-center">
            <hr className="border-black1 w-180 mt-1" />
            <p className="-mt-15 ml-10 mr-10">or</p>
            <hr className="border-black1 w-180 mt-1" />
          </div>
        </form>
      </div>
    </div>
  );
};