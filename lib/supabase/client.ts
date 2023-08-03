import "react-native-url-polyfill/auto";

import { createClient } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";
import invariant from "tiny-invariant";

import { type Database } from "./types";

invariant(process.env.SUPABASE_URL, "Missing SUPABASE_URL");
invariant(process.env.SUPABASE_API_KEY, "Missing SUPABASE_API_KEY");

export const supabase = createClient<Database>(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_API_KEY,
	{
		auth: {
			autoRefreshToken: true,
			persistSession: true,
			detectSessionInUrl: false,
			storage: {
				getItem: (key) => {
					return SecureStore.getItemAsync(key);
				},
				setItem: (key, value) => {
					SecureStore.setItemAsync(key, value);
				},
				removeItem: (key) => {
					SecureStore.deleteItemAsync(key);
				},
			},
		},
	}
);
