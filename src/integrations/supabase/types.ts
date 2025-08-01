export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      alerts: {
        Row: {
          alert_type: string | null
          bird_id: string | null
          confidence: number | null
          created_at: string | null
          id: string
          severity: string | null
          timestamp_in_video: string | null
          user_id: string | null
          video_id: string | null
        }
        Insert: {
          alert_type?: string | null
          bird_id?: string | null
          confidence?: number | null
          created_at?: string | null
          id?: string
          severity?: string | null
          timestamp_in_video?: string | null
          user_id?: string | null
          video_id?: string | null
        }
        Update: {
          alert_type?: string | null
          bird_id?: string | null
          confidence?: number | null
          created_at?: string | null
          id?: string
          severity?: string | null
          timestamp_in_video?: string | null
          user_id?: string | null
          video_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "alerts_bird_id_fkey"
            columns: ["bird_id"]
            isOneToOne: false
            referencedRelation: "birds"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alerts_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      appointments: {
        Row: {
          appointment_date: string | null
          bird_id: string | null
          created_at: string | null
          id: string
          notes: string | null
          user_id: string | null
          vet_name: string | null
        }
        Insert: {
          appointment_date?: string | null
          bird_id?: string | null
          created_at?: string | null
          id?: string
          notes?: string | null
          user_id?: string | null
          vet_name?: string | null
        }
        Update: {
          appointment_date?: string | null
          bird_id?: string | null
          created_at?: string | null
          id?: string
          notes?: string | null
          user_id?: string | null
          vet_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_bird_id_fkey"
            columns: ["bird_id"]
            isOneToOne: false
            referencedRelation: "birds"
            referencedColumns: ["id"]
          },
        ]
      }
      birds: {
        Row: {
          age: string | null
          color: string | null
          created_at: string | null
          custom_name: string | null
          detected_name: string
          id: string
          image_path: string | null
          notes: string | null
          species: string | null
          user_id: string | null
        }
        Insert: {
          age?: string | null
          color?: string | null
          created_at?: string | null
          custom_name?: string | null
          detected_name: string
          id?: string
          image_path?: string | null
          notes?: string | null
          species?: string | null
          user_id?: string | null
        }
        Update: {
          age?: string | null
          color?: string | null
          created_at?: string | null
          custom_name?: string | null
          detected_name?: string
          id?: string
          image_path?: string | null
          notes?: string | null
          species?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      dj_sessions: {
        Row: {
          created_at: string
          duration: number | null
          id: string
          session_data: Json | null
          session_name: string
          tracks_mixed: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          duration?: number | null
          id?: string
          session_data?: Json | null
          session_name: string
          tracks_mixed?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          duration?: number | null
          id?: string
          session_data?: Json | null
          session_name?: string
          tracks_mixed?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      exports: {
        Row: {
          created_at: string | null
          id: string
          metadata: Json | null
          platform: string | null
          status: string | null
          track_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          metadata?: Json | null
          platform?: string | null
          status?: string | null
          track_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          metadata?: Json | null
          platform?: string | null
          status?: string | null
          track_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exports_track_id_fkey"
            columns: ["track_id"]
            isOneToOne: false
            referencedRelation: "tracks"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_transactions: {
        Row: {
          buyer_id: string
          created_at: string
          currency: string
          gross_amount: number
          id: string
          platform_fee: number
          seller_amount: number
          seller_id: string
          status: string
          stripe_payment_intent_id: string
          track_id: string | null
          updated_at: string
        }
        Insert: {
          buyer_id: string
          created_at?: string
          currency?: string
          gross_amount: number
          id?: string
          platform_fee: number
          seller_amount: number
          seller_id: string
          status?: string
          stripe_payment_intent_id: string
          track_id?: string | null
          updated_at?: string
        }
        Update: {
          buyer_id?: string
          created_at?: string
          currency?: string
          gross_amount?: number
          id?: string
          platform_fee?: number
          seller_amount?: number
          seller_id?: string
          status?: string
          stripe_payment_intent_id?: string
          track_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_transactions_track_id_fkey"
            columns: ["track_id"]
            isOneToOne: false
            referencedRelation: "tracks"
            referencedColumns: ["id"]
          },
        ]
      }
      notes: {
        Row: {
          content: string | null
          created_at: string
          id: string
          is_pinned: boolean | null
          tags: string[] | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          is_pinned?: boolean | null
          tags?: string[] | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          is_pinned?: boolean | null
          tags?: string[] | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      playlist_tracks: {
        Row: {
          added_at: string
          id: string
          playlist_id: string
          position: number
          track_id: string
        }
        Insert: {
          added_at?: string
          id?: string
          playlist_id: string
          position: number
          track_id: string
        }
        Update: {
          added_at?: string
          id?: string
          playlist_id?: string
          position?: number
          track_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "playlist_tracks_playlist_id_fkey"
            columns: ["playlist_id"]
            isOneToOne: false
            referencedRelation: "playlists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "playlist_tracks_track_id_fkey"
            columns: ["track_id"]
            isOneToOne: false
            referencedRelation: "tracks"
            referencedColumns: ["id"]
          },
        ]
      }
      playlists: {
        Row: {
          cover_url: string | null
          created_at: string
          description: string | null
          id: string
          is_public: boolean | null
          name: string
          track_count: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cover_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_public?: boolean | null
          name: string
          track_count?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cover_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_public?: boolean | null
          name?: string
          track_count?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          dj_name: string | null
          favorite_genres: string[] | null
          id: string
          location: string | null
          social_links: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          dj_name?: string | null
          favorite_genres?: string[] | null
          id?: string
          location?: string | null
          social_links?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          dj_name?: string | null
          favorite_genres?: string[] | null
          id?: string
          location?: string | null
          social_links?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      species_info: {
        Row: {
          average_lifespan: string | null
          common_name: string | null
          curiosities: string | null
          diet: string | null
          id: number
          origin: string | null
          scientific_name: string | null
        }
        Insert: {
          average_lifespan?: string | null
          common_name?: string | null
          curiosities?: string | null
          diet?: string | null
          id?: number
          origin?: string | null
          scientific_name?: string | null
        }
        Update: {
          average_lifespan?: string | null
          common_name?: string | null
          curiosities?: string | null
          diet?: string | null
          id?: number
          origin?: string | null
          scientific_name?: string | null
        }
        Relationships: []
      }
      subscription_limits: {
        Row: {
          can_export: boolean | null
          can_use_community: boolean | null
          can_use_marketplace: boolean | null
          created_at: string
          id: string
          marketplace_commission_rate: number
          max_storage_mb: number
          max_tracks: number
          plan_type: string
        }
        Insert: {
          can_export?: boolean | null
          can_use_community?: boolean | null
          can_use_marketplace?: boolean | null
          created_at?: string
          id?: string
          marketplace_commission_rate?: number
          max_storage_mb: number
          max_tracks: number
          plan_type: string
        }
        Update: {
          can_export?: boolean | null
          can_use_community?: boolean | null
          can_use_marketplace?: boolean | null
          created_at?: string
          id?: string
          marketplace_commission_rate?: number
          max_storage_mb?: number
          max_tracks?: number
          plan_type?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at_period_end: boolean | null
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          email: string
          id: string
          plan_type: string
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cancel_at_period_end?: boolean | null
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          email: string
          id?: string
          plan_type?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cancel_at_period_end?: boolean | null
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          email?: string
          id?: string
          plan_type?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      track_comments: {
        Row: {
          color_code: string | null
          content: string
          created_at: string
          id: string
          is_resolved: boolean | null
          parent_id: string | null
          timestamp_mark: number | null
          track_id: string
          type: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          color_code?: string | null
          content: string
          created_at?: string
          id?: string
          is_resolved?: boolean | null
          parent_id?: string | null
          timestamp_mark?: number | null
          track_id: string
          type?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          color_code?: string | null
          content?: string
          created_at?: string
          id?: string
          is_resolved?: boolean | null
          parent_id?: string | null
          timestamp_mark?: number | null
          track_id?: string
          type?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "track_comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "track_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "track_comments_track_id_fkey"
            columns: ["track_id"]
            isOneToOne: false
            referencedRelation: "tracks"
            referencedColumns: ["id"]
          },
        ]
      }
      tracks: {
        Row: {
          artist: string
          bpm: number | null
          created_at: string
          duration: string
          energy_level: number | null
          file_path: string | null
          file_size: number | null
          file_url: string | null
          genre: string | null
          id: string
          is_featured: boolean | null
          is_liked: boolean | null
          key_signature: string | null
          original_filename: string | null
          play_count: number | null
          tags: string[] | null
          title: string
          type: string
          updated_at: string
          upload_status: string | null
          user_id: string
          waveform_data: Json | null
        }
        Insert: {
          artist: string
          bpm?: number | null
          created_at?: string
          duration: string
          energy_level?: number | null
          file_path?: string | null
          file_size?: number | null
          file_url?: string | null
          genre?: string | null
          id?: string
          is_featured?: boolean | null
          is_liked?: boolean | null
          key_signature?: string | null
          original_filename?: string | null
          play_count?: number | null
          tags?: string[] | null
          title: string
          type: string
          updated_at?: string
          upload_status?: string | null
          user_id: string
          waveform_data?: Json | null
        }
        Update: {
          artist?: string
          bpm?: number | null
          created_at?: string
          duration?: string
          energy_level?: number | null
          file_path?: string | null
          file_size?: number | null
          file_url?: string | null
          genre?: string | null
          id?: string
          is_featured?: boolean | null
          is_liked?: boolean | null
          key_signature?: string | null
          original_filename?: string | null
          play_count?: number | null
          tags?: string[] | null
          title?: string
          type?: string
          updated_at?: string
          upload_status?: string | null
          user_id?: string
          waveform_data?: Json | null
        }
        Relationships: []
      }
      videos: {
        Row: {
          analysis_status: string | null
          duration: number | null
          file_path: string
          filename: string
          id: string
          upload_date: string | null
          user_id: string | null
        }
        Insert: {
          analysis_status?: string | null
          duration?: number | null
          file_path: string
          filename: string
          id?: string
          upload_date?: string | null
          user_id?: string | null
        }
        Update: {
          analysis_status?: string | null
          duration?: number | null
          file_path?: string
          filename?: string
          id?: string
          upload_date?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_user_upload_track: {
        Args: { user_uuid?: string }
        Returns: boolean
      }
      get_comment_color: {
        Args: { comment_type: string }
        Returns: string
      }
      get_user_subscription_info: {
        Args: { user_uuid?: string }
        Returns: {
          plan_type: string
          status: string
          max_tracks: number
          max_storage_mb: number
          can_export: boolean
          can_use_community: boolean
          can_use_marketplace: boolean
          marketplace_commission_rate: number
          current_period_end: string
        }[]
      }
      is_admin: {
        Args: { user_id?: string }
        Returns: boolean
      }
      is_admin_by_email: {
        Args: { email: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
