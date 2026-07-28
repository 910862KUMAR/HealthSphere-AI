package com.healthsphere.backend.file;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.*;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class FileServiceImpl implements FileService {

    private final Path uploadPath = Paths.get(FileConstants.UPLOAD_DIR);

    public FileServiceImpl() {
        try {
            Files.createDirectories(uploadPath);
        } catch (IOException e) {
            throw new FileException("Could not create upload directory.");
        }
    }

    @Override
    public FileResponse uploadFile(MultipartFile file) {

        if (file.isEmpty()) {
            throw new FileException("Please select a file.");
        }

        if (file.getSize() > FileConstants.MAX_FILE_SIZE) {
            throw new FileException("File size exceeds 10 MB.");
        }

        String contentType = file.getContentType();

        boolean allowed = false;

        for (String type : FileConstants.ALLOWED_TYPES) {
            if (type.equals(contentType)) {
                allowed = true;
                break;
            }
        }

        if (!allowed) {
            throw new FileException("Unsupported file type.");
        }

        String originalFileName =
                StringUtils.cleanPath(file.getOriginalFilename());

        String extension = "";

        int index = originalFileName.lastIndexOf('.');

        if (index > 0) {
            extension = originalFileName.substring(index);
        }

        String fileName =
                UUID.randomUUID() + extension;

        try {

            Path targetLocation =
                    uploadPath.resolve(fileName);

            Files.copy(file.getInputStream(),
                    targetLocation,
                    StandardCopyOption.REPLACE_EXISTING);

            return new FileResponse(
                    fileName,
                    "/files/download/" + fileName,
                    contentType,
                    file.getSize(),
                    "File uploaded successfully."
            );

        } catch (IOException e) {

            throw new FileException("Could not upload file.");
        }
    }

    @Override
    public Resource downloadFile(String fileName) {

        try {

            Path path =
                    uploadPath.resolve(fileName).normalize();

            Resource resource =
                    new UrlResource(path.toUri());

            if (resource.exists()) {
                return resource;
            }

            throw new FileException("File not found.");

        } catch (MalformedURLException e) {

            throw new FileException("Invalid file.");
        }
    }

    @Override
    public void deleteFile(String fileName) {

        try {

            Path path =
                    uploadPath.resolve(fileName);

            Files.deleteIfExists(path);

        } catch (IOException e) {

            throw new FileException("Could not delete file.");
        }
    }

    @Override
    public List<String> listFiles() {

        try {

            return Files.list(uploadPath)
                    .map(path -> path.getFileName().toString())
                    .collect(Collectors.toList());

        } catch (IOException e) {

            throw new FileException("Could not list files.");
        }
    }
}