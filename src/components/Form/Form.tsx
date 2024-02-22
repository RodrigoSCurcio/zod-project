import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
  name: z.string().nonempty("Insira o nome"),
  lastName: z.string().nonempty("Insira o sobrenome"),
  email: z
    .string()
    .nonempty("Insira o endereço de e-mail")
    .email("Formato de e-mail inválido."),
});

type RegisterSchema = z.infer<typeof registerSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  function handleRegister(data: RegisterSchema) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="bg-gray-800 p-8 flex flex-col items-center gap-3 rounded-lg md:flex"
    >
      <h2 className="font-bold text-4xl">Registro</h2>

      <div className="flex flex-col gap-1 sm:w-auto lg:w-96">
        <label className="font-bold">Nome</label>
        <input
          type="text"
          placeholder="Nome"
          className="rounded-md px-3 outline-none h-9 text-gray-50 bg-black"
          {...register("name")}
        />
        {errors.name && (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-1 sm:w-auto lg:w-96">
        <label className="font-bold">Sobrenome</label>
        <input
          type="text"
          placeholder="Sobrenome"
          className="rounded-md px-3 outline-none h-9 text-gray-50 bg-black"
          {...register("lastName")}
        />
        {errors.lastName && (
          <span style={{ color: "red" }}>{errors.lastName.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-1 sm:w-auto lg:w-96">
        <label className="font-bold">E-mail</label>
        <input
          type="email"
          placeholder="E-mail"
          className="rounded-md px-3 outline-none h-9 text-gray-50 bg-black"
          {...register("email")}
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
      </div>
      <button className="bg-black h-9 rounded-lg my-2 font-bold border border-black hover:bg-white hover:text-black duration-200 ease-in-out sm:w-auto lg:w-96 p-2 flex items-center">
        Salvar
      </button>
    </form>
  );
}
