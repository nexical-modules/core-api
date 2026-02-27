# Core API Module

This module serves as the central schema endpoint for the Nexical Ecosystem. It aggregates OpenAPI specifications from all discoverable modules and serves them at the `/schema` endpoint.

## Features

- **Schema Aggregation**: Dynamically loads paths and components from all active modules.
- **OpenAPI 3.0 Compliance**: Provides a valid OpenAPI specification for use with documentation tools like Scalar.
- **Agnostic Discovery**: Leverages the `ModuleDiscovery` system to remain neutral while including all extensions.

## API Endpoints

- `GET /schema`: Returns the aggregated OpenAPI JSON.
