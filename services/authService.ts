
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

class AuthService {
  private currentUser: User | null = null;
  private STORAGE_KEY = 'genie_auth_user';

  constructor() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      this.currentUser = JSON.parse(saved);
    }
  }

  async login(email: string, password: string): Promise<User> {
    // Simulated delay for "Backend Verification"
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // In a real app, this would be a call to Firebase/Supabase/Node
    const user: User = {
      id: 'usr_' + Math.random().toString(36).substr(2, 9),
      email,
      name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
    };
    
    this.currentUser = user;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    return user;
  }

  async signup(name: string, email: string, password: string): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const user: User = {
      id: 'usr_' + Math.random().toString(36).substr(2, 9),
      email,
      name,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
    };
    
    this.currentUser = user;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    return user;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem(this.STORAGE_KEY);
  }

  getUser() {
    return this.currentUser;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}

export const auth = new AuthService();
