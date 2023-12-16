import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Stack, TextField, Button, InputAdornment, IconButton, Visibility } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';
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

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

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
    const [fotoFileName, setFotoFileName] = useState('');

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [nameError, setNameError] = useState('');
    const [userError, setUserError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [cpfError, setCPFError] = useState('');
    const [rgError, setRGError] = useState('');
    const [cepError, setCEPError] = useState('');
    const [fotoError, setFotoError] = useState('');
    const [passwordHelperText, setPasswordHelperText] = useState('');

    const handleFotoChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setFotoFile(file);
            const shortenedFileName = file.name.length > 10
                ? `${file.name.substring(0, 10)}...`
                : file.name;
            setFotoFileName(shortenedFileName);
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
        // Obtém apenas os números da entrada do usuário
        const numbersOnly = event.target.value.replace(/\D/g, '');

        // Limita o comprimento para 11 caracteres
        const limitedCPF = numbersOnly.slice(0, 11);

        // Formata o CPF (se desejar)
        const formattedCPF = formatCPF(limitedCPF);

        // Atualiza o estado do CPF
        setCpf(formattedCPF);
    };

    const handleRGChange = (event) => {
        const formattedRG = event.target.value;
        setRg(formattedRG);
    };

    const handleCEPChange = (event) => {
        const numericValue = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        const limitedCEP = numericValue.slice(0, 8); // Limita o comprimento para 8 caracteres
        const formattedCEP = formatCEP(limitedCEP);
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

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordBlur = () => {
        // Realiza as validações
        const hasMinLength = password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password);
        const hasNumber = /\d/.test(password); // Verifica se há pelo menos um número
        const hasNoSequentialNumbers = !/(11|22|33|44|55|66|77|88|99|00)/.test(password);

        // Atualiza o estado passwordError
        let error = '';

        if (password.trim() === '') {
            error = 'Senha é um campo obrigatório';
        } else if (!hasMinLength) {
            error = 'Senha muito curta (mínimo 8 caracteres)';
        } else if (!hasUpperCase) {
            error = 'A senha deve conter pelo menos uma letra maiúscula';
        } else if (!hasLowerCase) {
            error = 'A senha deve conter pelo menos uma letra minúscula';
        } else if (!hasSpecialChar) {
            error = 'A senha deve conter pelo menos um caractere especial';
        } else if (!hasNumber) {
            error = 'A senha deve conter pelo menos um número';
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
            } else if (!responseData.error && responseData.message === "Usuário cadastrado com sucesso!") {
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
                <Stack spacing={1}>
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
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        onBlur={handlePasswordBlur}
                        error={formSubmitted && (!isPasswordValid || !!passwordError)}
                        helperText={(formSubmitted && !isPasswordValid) ? 'Senha inválida.' : passwordError || ' '}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
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
                    <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        sx={{
                            backgroundColor: 'transparent',
                            mb: 10,
                            height: 70,
                            position: 'relative',
                            border: '2px dashed rgb(171, 205, 222, 0.5)',
                            borderRadius: 2,
                            overflow: 'hidden',
                            color: '#33FFC2',
                            boxShadow: 0,
                            '&:hover': {
                                backgroundColor: 'transparent',
                                borderColor: '#33FFC2',
                            },
                        }}
                    >
                        {fotoFileName ? `Foto: ${fotoFileName}` : 'Foto de Perfil'}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFotoChange}
                            style={{ display: 'none' }}
                        />
                    </Button>
                    <Button
                        sx={{ backgroundColor: '#33FFC2', mt: 3, boxShadow: 0, color: '#001D3D' }}
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
