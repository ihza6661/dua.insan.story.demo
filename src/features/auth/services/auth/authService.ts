
// src/services/authService.ts (Final & Corrected)

// ===================================================================
// --- DEFINISI TIPE (Bersih & Sesuai API) ---
// ===================================================================

/**
 * Tipe data inti untuk objek pengguna.
 */
export interface User {
  id: number;
  full_name: string;
  email: string;
  phone_number: string | null;
  role: "customer" | "admin";
  address?: string | null;
  city_id?: number | null;
  city_name?: string | null; // Changed from city_id
  province_name?: string | null; // Changed from province_id
  postal_code?: string | null;
}

// --- Payload untuk Permintaan API ---
export interface RegisterPayload {
  full_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone_number?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface UpdateProfilePayload {
  full_name: string;
  email: string;
  phone_number?: string;
  address?: string;
  city_name?: string; // Changed from city_id
  province_name?: string; // Changed from province_id
  postal_code?: string;
}

export interface ChangePasswordPayload {
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
}

// --- Tipe Data untuk Respons API (Pembungkus) ---
// Frontend harus selalu mengharapkan respons dalam format ini
// dan mengambil data dari properti 'data'.
interface ApiResponse<T> {
  message: string;
  data: T;
}

// Tipe khusus untuk respons login
interface LoginApiResponse {
  message: string;
  data: {
    user: User;
    token: string;
  };
}


// ===================================================================
// --- FUNGSI-FUNGSI API ---
// ===================================================================

/**
 * Mengirim permintaan registrasi pengguna baru.
 */
export const registerUser = async (data: RegisterPayload): Promise<ApiResponse<User>> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        message: 'Registration successful',
        data: {
          id: 1,
          full_name: data.full_name,
          email: data.email,
          phone_number: data.phone_number || null,
          role: 'customer'
        }
      });
    }, 500);
  });
};

/**
 * Mengirim permintaan login pengguna.
 */
export const loginUser = async (credentials: LoginPayload): Promise<LoginApiResponse> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        message: 'Login successful',
        data: {
          user: {
            id: 1,
            full_name: 'John Doe',
            email: credentials.email,
            phone_number: '08123456789',
            role: 'customer'
          },
          token: 'mock-auth-token'
        }
      });
    }, 500);
  });
};

/**
 * Mengirim permintaan logout.
 */
export const logoutUser = async (): Promise<{ message: string }> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ message: 'Logout successful' });
    }, 500);
  });
};

/**
 * Mengambil data profil pengguna yang sedang login.
 * ✅ PERBAIKAN: Mengharap ApiResponse<User> dan mengembalikan response.data.data
 */
export const getMyProfile = async (): Promise<User> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 1,
                full_name: 'John Doe',
                email: 'john.doe@example.com',
                phone_number: '08123456789',
                role: 'customer'
            });
        }, 500);
    });
};

/**
 * Memperbarui data profil pengguna yang sedang login.
 * ✅ PERBAIKAN: Mengharap ApiResponse<User> dan mengembalikan response.data
 */
export const updateProfile = async (payload: UpdateProfilePayload): Promise<ApiResponse<User>> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                message: 'Profile updated successfully',
                data: {
                    id: 1,
                    full_name: payload.full_name,
                    email: payload.email,
                    phone_number: payload.phone_number || null,
                    role: 'customer'
                }
            });
        }, 500);
    });
};

/**
 * Mengubah password pengguna.
 */
export const changePassword = async (payload: ChangePasswordPayload): Promise<{ message: string }> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ message: 'Password changed successfully' });
        }, 500);
    });
};
