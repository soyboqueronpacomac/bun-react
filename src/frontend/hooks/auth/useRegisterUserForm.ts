import { useState } from "react";
import { registerInitialState, type RegisterUser, type RegisterUserReturn } from "../../domain/users/user.entity";

export const useRegisteruserForm = (): RegisterUserReturn => {
    const [form, setForm] = useState<RegisterUser>(registerInitialState);
    const [message, setMessage] = useState<string | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
      }
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.message || "Error en el registro");
          setMessage("✅" + data.message);
          console.log("Usuario registrado:", data);
        } catch (error) {
          setMessage("❌" + (error as Error).message);
        }
      }
      return { form, message, handleChange, handleSubmit  };
}