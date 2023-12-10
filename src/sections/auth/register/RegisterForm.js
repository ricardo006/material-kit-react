import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, TextField, Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Função para aplicar a máscara de CPF
function formatCPF(value) {
    const numericValue = value.replace(/\D/g, '');
    return numericValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

// Função para aplicar a máscara de CEP
function formatCEP(value) {
    const numericValue = value.replace(/\D/g, '');
    return numericValue.replace(/(\d{5})(\d{3})/, '$1-$2');
}

function RegisterForm() {
    const navigate = useNavigate();

    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [rg, setRg] = useState('');
    const [cep, setCep] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [fotoFile, setFotoFile] = useState(null);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [nameError, setNameError] = useState('');
    const [userError, setUserError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [cpfError, setCPFError] = useState('');
    const [rgError, setRGError] = useState('');
    const [cepError, setCEPError] = useState('');
    const [fotoError, setFotoError] = useState('');
    const [passwordHelperText, setPasswordHelperText] = useState('');

    const handleFotoChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            setFotoFile(selectedFile);
        }
    };

    const handleNomeChange = (event) => {
        const newName = event.target.value;
        setNome(newName);
        setNameError(newName.trim() === '');
    };

    const handleNomeUsuarioChange = (event) => {
        setNomeUsuario(event.target.value);
    };

    const handleCPFChange = (event) => {
        const formattedCPF = formatCPF(event.target.value);
        setCpf(formattedCPF);
    };

    const handleRGChange = (event) => {
        const formattedRG = event.target.value;
        setRg(formattedRG);
    };

    const handleCEPChange = (event) => {
        const formattedCEP = formatCEP(event.target.value);
        setCep(formattedCEP);
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setIsEmailValid(validateEmail(newEmail));
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setIsPasswordValid(validatePassword(newPassword));
    };

    const handlePasswordBlur = () => {
        // Realiza as validações
        const hasMinLength = password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password);
        const hasNoSequentialNumbers = !/(11|22|33|44|55|66|77|88|99|00)/.test(password);

        // Atualiza o estado passwordError
        let error = '';

        if (!hasMinLength) {
            error = 'Senha muito curta (mínimo 8 caracteres)';
        } else if (!hasUpperCase) {
            error = 'A senha deve conter pelo menos uma letra maiúscula';
        } else if (!hasLowerCase) {
            error = 'A senha deve conter pelo menos uma letra minúscula';
        } else if (!hasSpecialChar) {
            error = 'A senha deve conter pelo menos um caractere especial';
        } else if (!hasNoSequentialNumbers) {
            error = 'A senha não pode conter números em sequência (como 11, 22, 33, ...)';
        }

        setPasswordError(error);
    };

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const validatePassword = (password) => {
        // Pelo menos 8 caracteres
        const hasMinLength = password.length >= 8;

        // Pelo menos uma letra maiúscula
        const hasUpperCase = /[A-Z]/.test(password);

        // Pelo menos uma letra minúscula
        const hasLowerCase = /[a-z]/.test(password);

        // Pelo menos um caractere especial
        const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password);

        // Não ter números em sequência (11, 22, ...)
        const hasNoSequentialNumbers = !/(11|22|33|44|55|66|77|88|99|00)/.test(password);

        // Todas as condições devem ser atendidas
        return hasMinLength && hasUpperCase && hasLowerCase && hasSpecialChar && hasNoSequentialNumbers;
    };

    const handleCadastroClick = async (event) => {
        event.preventDefault();

        try {
            let formIsValid = true;

            // Validações para cada campo
            if (!nome) {
                setNameError('Nome não preenchido!');
                formIsValid = false;
            } else {
                setNameError('');
            }

            if (!nomeUsuario) {
                console.log('Usuário não preenchido');
                setUserError(nomeUsuario.trim() === '' ? 'Usuário não preenchido' : '');
                formIsValid = false;
            } else {
                setUserError('');
            }

            if (!email || !isEmailValid) {
                console.log('E-mail inválido ou não preenchido');
                setEmailError(email.trim() === '' ? 'E-mail não preenchido' : 'E-mail inválido');
                formIsValid = false;
            } else {
                setEmailError('');
            }

            if (!password || !isPasswordValid) {
                console.log('Senha inválida ou não preenchida');
                setPasswordError(password.trim() === '' ? 'Senha não preenchida' : 'Senha inválida (mínimo 6 caracteres)');
                setPasswordHelperText('');
                formIsValid = false;
            } else {
                setPasswordError('');
                setPasswordHelperText('');
            }

            if (!cpf) {
                console.log('CPF é obrigatório.');
                setCPFError(cpf.trim() === '' ? 'CPF é obrigatório.' : '');
                formIsValid = false;
            } else {
                setCPFError('');
            }

            if (!rg) {
                console.log('RG é obrigatório.');
                setRGError(rg.trim() === '' ? 'RG é obrigatório.' : '');
                formIsValid = false;
            } else {
                setRGError('');
            }

            if (!cep) {
                console.log('CEP é obrigatório.');
                setCEPError(cep.trim() === '' ? 'CEP é obrigatório.' : '');
                formIsValid = false;
            } else {
                setCEPError('');
            }

            if (!fotoFile) {
                console.log('Foto não selecionada');
                setFotoError('Foto não selecionada');
                formIsValid = false;
            } else {
                setFotoError('');
            }

            setFormSubmitted(true);

            if (!formIsValid) {
                toast.error('Preencha os campos indicados como obrigatório.', {
                    position: toast.POSITION.TOP_CENTER,
                });
                return;
            }

            const formData = new FormData();

            formData.append('id_tipo_usuario', '1');
            formData.append('nome_usuario', nomeUsuario);
            formData.append('nome_completo', nome);
            formData.append('link_indicacao', 'link/url');
            formData.append('email', email);
            formData.append('password', password);
            formData.append('cpf', cpf);
            formData.append('rg', rg);
            formData.append('nacionalidade', 'brasileiro');
            formData.append('cep', cep);
            formData.append('saldo', '500');
            formData.append('foto', fotoFile);
            formData.append('caminho_foto', fotoFile.name);

            console.log('Dados enviados para a API:', formData);

            const response = await fetch('http://localhost:8000/api/v1/user/create-YXBpLmJldHNwYWNl', {
                method: 'POST',
                body: formData,
            });

            console.log(response);

            const responseData = await response.json();

            if (responseData.error && responseData.erros) {
                // Verifica se 'cpf' está presente e não é undefined
                if (responseData.erros.cpf && responseData.erros.cpf.length > 0) {
                    // Exibe a mensagem específica para CPF
                    toast.error(responseData.erros.cpf[0], {
                        position: toast.POSITION.TOP_CENTER,
                    });
                } else {
                    // Itera pelos erros e exibe cada mensagem
                    Object.keys(responseData.erros).forEach((campo) => {
                        const mensagensErro = responseData.erros[campo];
                        mensagensErro.forEach((mensagem) => {
                            toast.error(mensagem, {
                                position: toast.POSITION.TOP_CENTER,
                            });
                        });
                    });
                }
            } else if (!responseData.error && responseData.message === "Usuário cadastrado com sucesso, estamos te redirecionando...") {
                // Se a resposta indicar sucesso, limpa os campos, exibe a mensagem e redireciona após 10 segundos
                toast.success(responseData.message, {
                    position: toast.POSITION.TOP_CENTER,
                });

                // Limpa os campos do formulário
                setNome('');
                setNomeUsuario('');
                setEmail('');
                setPassword('');
                setCpf('');
                setRg('');
                setCep('');
                setFotoFile(null);

                // Demora 10 segundos antes de redirecionar
                setTimeout(() => {
                    // Adicione a lógica de redirecionamento para o dashboard usando navigate
                    navigate('/dashboard', { replace: true });
                }, 10000);
            } else if (response.statusText !== 'OK') {
                // Se não houver erros na resposta, mas o status não for OK, trata como erro genérico
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }

            console.log('Resposta da API:', responseData);

        } catch (error) {
            console.error('Erro:', error.message);
            toast.error(`Erro: ${error.message}`, {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    };

    return (
        <>
            <form onSubmit={handleCadastroClick}>
                <Stack spacing={2}>
                    <TextField
                        name="nome_completo"
                        label="Nome Completo"
                        value={nome}
                        onChange={handleNomeChange}
                        error={formSubmitted && nameError}
                        helperText={(formSubmitted && nameError) ? 'O Nome Completo é obrigatório!' : ''}
                    />
                    <TextField
                        name="nome_usuario"
                        label="Usuário"
                        value={nomeUsuario}
                        onChange={handleNomeUsuarioChange}
                        error={userError}
                        helperText={userError ? 'Usuário não preenchido' : ''}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        value={email}
                        onChange={handleEmailChange}
                        error={formSubmitted && (!isEmailValid || emailError)}
                        helperText={(formSubmitted && !isEmailValid) ? 'E-mail inválido' : emailError}
                    />
                    <TextField
                        name="password"
                        label="Senha"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        onBlur={handlePasswordBlur} // Adiciona o evento onBlur
                        error={formSubmitted && (!isPasswordValid || !!passwordError)}
                        helperText={(formSubmitted && !isPasswordValid) ? 'Senha inválida (mínimo 8 caracteres)' : passwordError || ' '}
                    />
                    <TextField
                        name="cpf"
                        label="CPF"
                        value={cpf}
                        onChange={handleCPFChange}
                        error={cpfError}
                        helperText={cpfError}
                    />
                    <TextField
                        name="rg"
                        label="RG"
                        value={rg}
                        onChange={handleRGChange}
                        error={rgError}
                        helperText={rgError}
                    />
                    <TextField
                        name="cep"
                        label="CEP"
                        value={cep}
                        onChange={handleCEPChange}
                        error={cepError}
                        helperText={cepError}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFotoChange}
                    />
                    <Button
                        sx={{ backgroundColor: '#33FFC2', boxShadow: 0, color: '#001D3D' }}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Cadastrar
                    </Button>
                </Stack>
            </form>
            <ToastContainer />
        </>
    );
}

export default RegisterForm;
