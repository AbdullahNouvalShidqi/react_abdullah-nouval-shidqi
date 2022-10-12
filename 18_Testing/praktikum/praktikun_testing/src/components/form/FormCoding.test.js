import { render, screen, fireEvent } from '@testing-library/react';
import NameForm from './FormCoding';

describe('FormCodePage', () => {
  test('Renders FormPage labels', () => {
    render(<NameForm />);

    const title = screen.getByText(/Pendaftaran Peserta Coding Bootcamp/);
    const nameLabel = screen.getByLabelText('Nama Lengkap:');
    const emailLabel = screen.getByLabelText('Email:');
    const noPhoneLabel =  screen.getByLabelText('No Handphone:');
    const educationLabel = screen.getByLabelText(/Latar Belakang Pendidikan:/);
    const selectedCodingClassLabel = screen.getByLabelText('Kelas Coding yang Dipilih:');
    const fotoKesungguhanlabel = screen.getByLabelText('Foto Surat Kesungguhan:');
    const hopeForBootcampLabel = screen.getByLabelText('Harapan Untuk Coding Bootcamp Ini:');

    expect(title).toBeInTheDocument();
    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(noPhoneLabel).toBeInTheDocument();
    expect(educationLabel).toBeInTheDocument();
    expect(selectedCodingClassLabel).toBeInTheDocument();
    expect(fotoKesungguhanlabel).toBeInTheDocument();
    expect(hopeForBootcampLabel).toBeInTheDocument();
  });

  test('Correct input text test', () => {
    render(<NameForm/>);

    fireEvent.input(
      screen.getByRole('textbox', {name: /nama/i}),
      {target: {value: 'Abdullah Nouval Shidqi'}}
    );

    fireEvent.input(
      screen.getByRole('textbox', {name: /email/i}),
      {target: {value: 'abdullah.nouval@gmail.com'}}
    );

    const namaLabel = screen.getByLabelText('Nama Lengkap:');
    const emailLabel = screen.getByLabelText('Email:');

    expect(namaLabel).toHaveValue('Abdullah Nouval Shidqi')
    expect(emailLabel).toHaveValue('abdullah.nouval@gmail.com')
  });

  test('Incorrect input text test', () => {
    render(<NameForm/>);

    fireEvent.input(
      screen.getByRole('textbox', {name: /nama/i}),
      {target: {value: 'Abdullah Nouval1'}}
    );

    fireEvent.input(
      screen.getByRole('textbox', {name: /email/i}),
      {target: {value: 'abdullah.nouval'}}
    );

    const nameWarning = screen.getByText('Nama Lengkap Harus Berupa Huruf');
    const emailWarning = screen.getByText('Email Tidak Sesuai');

    expect(nameWarning).toBeInTheDocument();
    expect(emailWarning).toBeInTheDocument();
  });

  test('Submit handle test', () => {
    render(<NameForm/>);

    fireEvent.input(
      screen.getByRole('textbox', {name: /nama/i}),
      {target: {value: 'Abdullah Nouval Shidqi'}}
    );

    fireEvent.input(
      screen.getByRole('textbox', {name: /email/i}),
      {target: {value: 'abdullah.nouval@gmail.com'}}
    );

    fireEvent.click(screen.getByText('Submit'));

    const namaLabel = screen.getByLabelText('Nama Lengkap:');
    const emailLabel = screen.getByLabelText('Email:');

    expect(namaLabel).toHaveValue('');
    expect(emailLabel).toHaveValue('');
  })
});