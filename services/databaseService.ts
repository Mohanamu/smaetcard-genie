
import { RecommendationResult } from '../types';

export interface SavedRecommendation extends RecommendationResult {
  id: string;
  savedAt: string;
  userId: string;
}

class DatabaseService {
  private STORAGE_KEY = 'genie_vault_data';

  async saveRecommendation(userId: string, result: RecommendationResult): Promise<SavedRecommendation> {
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulating DB write delay
    
    const savedRec: SavedRecommendation = {
      ...result,
      id: 'rec_' + Math.random().toString(36).substr(2, 9),
      savedAt: new Date().toISOString(),
      userId
    };

    const existing = this.getAll(userId);
    const updated = [savedRec, ...existing];
    localStorage.setItem(this.STORAGE_KEY + '_' + userId, JSON.stringify(updated));
    
    return savedRec;
  }

  getAll(userId: string): SavedRecommendation[] {
    const data = localStorage.getItem(this.STORAGE_KEY + '_' + userId);
    return data ? JSON.parse(data) : [];
  }

  async delete(userId: string, recId: string): Promise<void> {
    const existing = this.getAll(userId);
    const filtered = existing.filter(r => r.id !== recId);
    localStorage.setItem(this.STORAGE_KEY + '_' + userId, JSON.stringify(filtered));
  }
}

export const db = new DatabaseService();
