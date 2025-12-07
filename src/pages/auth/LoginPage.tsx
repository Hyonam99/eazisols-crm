import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginFormPayload } from "types/auth";
import { LoginSchema } from "@utils/validators";

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormPayload>({
		resolver: zodResolver(LoginSchema),
	});

	const onSubmit = async (data: LoginFormPayload) => {
		console.log("Submitted Login Data:", data);
	};

	return (
		<div className="min-h-screen w-full bg-linear-to-br from-purple-500/20 via-blue-400/10 to-purple-300/10 flex items-center justify-center px-4">
			{/* Background design */}
			<div className="absolute top-10 left-10 w-40 h-40 bg-purple-400/30 blur-3xl rounded-full" />
			<div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-400/30 blur-3xl rounded-full" />

			<div className="relative bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-md border border-white/40">
				<h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
					Welcome Back 👋
				</h1>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col gap-6"
				>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-600 mb-1"
						>
							Email
						</label>
						<input
							type="email"
							placeholder="Enter your email"
							{...register("email")}
							className={`w-full px-4 py-3 rounded-xl border ${
								errors.email
									? "border-red-500"
									: "border-gray-300 focus:border-purple-500"
							} focus:ring-2 focus:ring-purple-400 outline-none transition`}
						/>

						{errors.email && (
							<p className="text-red-500 text-sm mt-1">
								{errors.email.message}
							</p>
						)}
					</div>

					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-600 mb-1"
						>
							Password
						</label>
						<input
							type="password"
							placeholder="Enter your password"
							{...register("password")}
							className={`w-full px-4 py-3 rounded-xl border ${
								errors.password
									? "border-red-500"
									: "border-gray-300 focus:border-purple-500"
							} focus:ring-2 focus:ring-purple-400 outline-none transition`}
						/>

						{errors.password && (
							<p className="text-red-500 text-sm mt-1">
								{errors.password.message}
							</p>
						)}
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						className="mt-2 w-full bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:opacity-90 transition disabled:opacity-60"
					>
						{isSubmitting ? "Logging in" : "Login"}
					</button>

					<p className="text-center text-sm text-gray-600 mt-2">
						Forgot your password?{" "}
						<span className="text-purple-600 font-semibold cursor-pointer hover:underline">
							Reset here
						</span>
					</p>
				</form>
			</div>
		</div>
	);
}

export default LoginPage;
