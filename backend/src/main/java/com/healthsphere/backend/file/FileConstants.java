package com.healthsphere.backend.file;

public class FileConstants {

    public static final String UPLOAD_DIR = "uploads";

    public static final long MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

    public static final String[] ALLOWED_TYPES = {
            "image/jpeg",
            "image/png",
            "application/pdf"
    };

    private FileConstants() {
        // Prevent instantiation
    }
}